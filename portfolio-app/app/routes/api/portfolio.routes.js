const express = require("express");
const rateLimit = require("express-rate-limit");
const portfolioController = require("../../controller/api/portfolio.controller");
const validate = require("../../middleware/validate");
const { contactSchema } = require("../../validation/contact.validation");


const router = express.Router();

// max 10 messages per 15 minutes from one IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { status: false, message: "Too many messages, please try again later" },
});

router.get("/portfolio", portfolioController.getPortfolio);
router.get("/cv/download", portfolioController.downloadCv);
router.post("/contact", contactLimiter, validate(contactSchema), portfolioController.sendMessage);

module.exports = router;
