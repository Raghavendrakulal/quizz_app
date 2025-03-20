const express = require('express');
const connect = require("./configs/db.js");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const Port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Authentication Routes
const loginAuth = require("./controller/auth.controller.js");
app.use("/", loginAuth);

const RegisterAuth = require("./controller/auth.controller.js");
app.use("/", RegisterAuth);

// Admin Routes for Adding Quizzes
const quizAdd = require("./controller/quizAdd.controller.js");
app.use("/admin", quizAdd);

// Quiz Display and User Attempt Routes
const quiz = require("./controller/displayQuiz.controller.js");
app.use("/quiz", quiz);

// User Management Routes
const user = require("./controller/auth.controller.js");
app.use("/user", user);

// User Results Routes
const userResult = require("./controller/userData.controller.js");
app.use("/userResult", userResult);

// New Route for Quiz Categories and Results
const quizResults = require("./controller/quizResults.controller.js");
app.use("/quiz", quizResults);

// Start Server
app.listen(Port, async function () {
  try {
    await connect();
    console.log(`🚀 Server is running on http://localhost:${Port}`);
  } catch (error) {
    console.error("❌ Error connecting to the database:", error.message);
  }
});