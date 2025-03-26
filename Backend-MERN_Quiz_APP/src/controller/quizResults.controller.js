const express = require("express");
const router = express.Router();
const Quiz = require("../model/quizdata.model");
const Result = require("../model/result.model");

// Get all distinct categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Quiz.distinct("category");
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get leaderboard data
router.get("/leaderboard", async (req, res) => {
  try {
    const { category } = req.query;
    console.log("Fetching leaderboard data for category:", category); // Debugging
    const filter = category ? { category } : {};
    const results = await Result.find(filter).sort({ score: -1 });
    console.log("Fetched leaderboard data:", results); // Debugging
    res.json(results);
  } catch (error) {
    console.error("Error fetching leaderboard data:", error); // Debugging
    console.error("Error details:", error.message); // Detailed error logging
    res.status(500).json({ message: "Error fetching leaderboard data", error });
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
    console.error("Error fetching quizzes:", error);
    res.status(500).json({ message: "Error fetching quizzes", error });
  }
});

// Get quiz by ID
router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    res.status(500).json({ message: "Error fetching quiz data", error });
  }
});

// Save quiz results
router.post("/save-results", async (req, res) => {
  try {
    const { user, category, score } = req.body;
    console.log("Received data from client:", { user, category, score });
    const result = new Result({ user, category, score });
    await result.save();
    res.status(201).send("Results saved successfully");
  } catch (error) {
    console.error("Error saving results:", error);
    res.status(500).send("Error saving results");
  }
});



// Update an existing quiz by ID
router.put("/update-quiz/:id", async (req, res) => {
  try {
    const quizId = req.params.id;
    const updatedQuiz = req.body;

    // Find the quiz by ID and update it
    const quiz = await Quiz.findByIdAndUpdate(quizId, updatedQuiz, { new: true });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json({ message: "Quiz updated successfully", quiz });
  } catch (error) {
    console.error("Error updating quiz:", error);
    res.status(500).json({ message: "Error updating quiz", error });
  }
});

module.exports = router;