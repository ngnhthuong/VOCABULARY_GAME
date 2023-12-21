const vocabularyModel = require("../models/vocabularyModel");
const dotenv = require("dotenv");
const validIdMogo = require("../utils/validMongoDB");
dotenv.config();

module.exports = {
  addvocabulary: async (req, res) => {
    try {
      const { word } = req.body;
      const newVocabulary = new vocabularyModel({ word });
      const savedVocabulary = await newVocabulary.save();
      res.json(savedVocabulary);
    } catch (error) {
      console.error("Lỗi khi thêm từ vựng:", error);
      res.status(500).json({ error: "Lỗi khi thêm từ vựng" });
    }
  },
  getvocabulary: async (req, res) => {
    try {
      const vocabularies = await vocabularyModel.aggregate([
        { $sample: { size: 24 } },
      ]);
      console.log(vocabularies);
      res.json(vocabularies);
    } catch (error) {
      console.error("Lỗi khi lấy từ vựng:", error);
      res.status(500).json({ error: "Lỗi khi lấy từ vựng" });
    }
  },
};
