const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const Message = require("../../models/message.model");
const portfolioData = require("../../data/portfolio.data");
const StatusCode = require("../../utils/statusCode");

const contactEmail = "rehanmdmoin@gmail.com";

class PortfolioController {
  // GET /api/portfolio
  async getPortfolio(req, res) {
    try {
      return res.status(StatusCode.OK).json({
        status: true,
        message: "Portfolio fetched successfully",
        data: portfolioData,
      });
    } catch (error) {
      console.log(error);
      return res.status(StatusCode.SERVER_ERROR).json({ status: false, message: "Something went wrong" });
    }
  }

  // POST /api/contact
  async sendMessage(req, res) {
    try {
      const { name, email, subject, message } = req.body;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      if (!smtpUser || !smtpPass) {
        return res.status(StatusCode.SERVICE_UNAVAILABLE).json({
          status: false,
          message: "The contact form is not configured right now. Please email me directly.",
        });
      }

      const smtpPort = Number(process.env.SMTP_PORT || 465);
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"Portfolio contact form" <${smtpUser}>`,
        to: contactEmail,
        replyTo: { name, address: email },
        subject: subject ? `Portfolio contact: ${subject}` : `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(not provided)"}\n\n${message}`,
      });

      if (mongoose.connection.readyState === 1) {
        try {
          await Message.create({ name, email, subject, message });
        } catch (error) {
          console.error("Message email was sent, but saving it to MongoDB failed:", error);
        }
      }

      return res.status(StatusCode.CREATED).json({
        status: true,
        message: "Thanks for reaching out! I will get back to you soon.",
      });
    } catch (error) {
      console.log(error);
      return res.status(StatusCode.SERVER_ERROR).json({ status: false, message: "Something went wrong" });
    }
  }

  // GET /api/cv/download
  async downloadCv(req, res) {
    try {
      const filePath = path.join(__dirname, "../../../public/cv/Md_Moin_Rehan_CV.pdf");

      if (!fs.existsSync(filePath)) {
        return res.status(StatusCode.NOT_FOUND).json({ status: false, message: "CV not found" });
      }

      return res.download(filePath, "Md_Moin_Rehan_CV.pdf");
    } catch (error) {
      console.log(error);
      return res.status(StatusCode.SERVER_ERROR).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new PortfolioController();
