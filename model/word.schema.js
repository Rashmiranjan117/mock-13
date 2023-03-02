const mongoose = require("mongoose");

const wordSchema = mongoose.Schema({
  word: String,
});

const WordModel = mongoose.model("word", wordSchema);

module.exports = { WordModel };
