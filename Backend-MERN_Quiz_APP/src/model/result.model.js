const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user: { type: String, required: true },
  category: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;