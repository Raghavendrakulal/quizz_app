// const express = require('express');
// const router = express.Router();
// const Quiz = require('../model/quizdata.model'); // Ensure correct model path

// // Get distinct categories
// router.get('/categories', async (req, res) => {
//   try {
//     const categories = await Quiz.distinct('category');
//     res.status(200).json(categories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
const express = require("express");
const Quiz = require("../model/quizdata.model");
const router = express.Router();

// Get all distinct categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Quiz.distinct("category");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
