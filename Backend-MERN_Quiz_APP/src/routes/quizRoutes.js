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

// Get quizzes by category
router.get("/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const quizzes = await Quiz.find({ category });
      if (quizzes.length === 0) {
        return res.status(404).json({ message: "No quizzes found for this category." });
      }
      res.status(200).json(quizzes);
    } catch (error) {
      res.status(500).json({ message: "Error fetching quizzes", error });
    }
  });

module.exports = router;
