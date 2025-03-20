// const express=require('express');
// const connect=require("./configs/db.js")
// const bodyParser = require("body-parser");
// const Port = process.env.PORT || 4000
// var cors = require('cors')
// const app=express();
// app.use(express.json());
// app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// const loginAuth=require("./controller/auth.controller.js")
// app.use("/",loginAuth)
// const RegisterAuth=require("./controller/auth.controller.js")
// app.use("/",RegisterAuth)

// const quizAdd=require("./controller/quizAdd.controller.js")
// app.use("/admin",quizAdd)

// const quiz=require("./controller/displayQuiz.controller.js")
// app.use("/quiz",quiz)

// const getquiz = require("./controller/quizAdd.controller.js")
// app.use("/quiz",getquiz)

// const user=require("./controller/auth.controller.js")
// app.use("/user",user)

// const userResult=require("./controller/userData.controller.js")
// app.use("/userResult",userResult)

// //category
// const quizRoutes = require('./router/quizRoutes');
// app.use('/quiz', quizRoutes);


// app.listen(Port, async function () {
//     try {
//       await connect();
//       console.log(`🚀 Server is running on http://localhost:${Port}`);
//     } catch (error) {
//       console.error("❌ Error connecting to the database:", error.message);
//     }
//   });
  

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

// New Route for Quiz Categories
const quizRoutes = require("./routes/quizRoutes.js");
app.use("/quiz", quizRoutes);

// Start Server
app.listen(Port, async function () {
  try {
    await connect();
    console.log(`🚀 Server is running on http://localhost:${Port}`);
  } catch (error) {
    console.error("❌ Error connecting to the database:", error.message);
  }
});

