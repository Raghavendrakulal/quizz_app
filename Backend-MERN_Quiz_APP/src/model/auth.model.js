const mongoose = require("mongoose");

const quizAttemptedSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },  // Fix: Reference Quiz instead of User
  quizResult: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
      selectedOption: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    }
  ],
  score: { type: Number, required: true },
  attemptedAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, index: true }, // Fix: Unique & Indexed for faster lookups
  password: { type: String, required: true },
  Points: { type: Number, default: 0 },
  quizAttempted: [quizAttemptedSchema],  // List of quiz attempts with details
});

const User = mongoose.model("User", userSchema);

module.exports = User;
