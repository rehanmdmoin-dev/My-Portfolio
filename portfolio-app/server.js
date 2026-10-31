require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const portfolioRoutes = require("./app/routes/api/portfolio.routes");

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        fontSrc: ["https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"],
      },
    },
  })
);
app.use(cors());
app.use(express.json());

// frontend
app.use(express.static(path.join(__dirname, "public")));

// api
app.use("/api", portfolioRoutes);

// Connect database for optional contact-message storage.
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection failed:", error.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
