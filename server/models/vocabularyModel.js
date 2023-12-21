const mongoose = require("mongoose");
const vocabularySchema = new mongoose.Schema({
  word: { type: String, default: null },
  wordSeparate: { type: String, default: null },
  round: { type: String, default: null },
  score: { type: String, default: null },
  winner: { type: String, default: null },
  location: { type: String, default: null },
});

module.exports = mongoose.model("vocabulary", vocabularySchema);
