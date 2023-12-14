const dotenv = require("dotenv").config();
const rankingModel = require("../models/rankingModel");
const validIdMogo = require("../utils/validMongoDB");
module.exports = {
    getRanking: async (req, res) => {
        try {
        const ranking = await rankingModel.find();
        res.status(200).json({ message: "Get ranking successfully", data: ranking });
        } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error}`, data: null });
        }
    },
    getRankingById: async (req, res) => {
        try {
        const { id } = req.params;
        if (validIdMogo(id)) {
            return res.status(400).json({ message: "Invalid id ranking" });
        }
        const ranking = await rankingModel.findById(id);
        if (!ranking) {
            return res.status(404).json({ message: "Ranking not found" });
        }
        res.status(200).json({ message: "Get ranking successfully", data: ranking });
        } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error}`, data: null });
        }
    },
    createRanking: async (req, res) => {
        try {
        const ranking = await rankingModel.create(req.body);
        res.status(201).json({ message: "Create ranking successfully", data: ranking });
        } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error}`, data: null });
        }
    },
    updateRanking: async (req, res) => {
        try {
        const { id } = req.params;
        if (validIdMogo(id)) {
            return res.status(400).json({ message: "Invalid id" });
        }
        const ranking = await rankingModel.findById(id);
        if (!ranking) {
            return res.status(404).json({ message: "Ranking not found" });
        }
        const updateRanking = await rankingModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Update ranking successfully", data: updateRanking });
        } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error}`, data: null });
        }
    },
    deleteRanking: async (req, res) => {
        try {
        const { id } = req.params;
        if (validIdMogo(id)) {
            return res.status(400).json({ message: "Invalid id" });
        }
        const ranking = await rankingModel.findById(id);
        if (!ranking) {
            return res.status(404).json({ message: "Ranking not found" });
        }
        await rankingModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Delete ranking successfully", data: null });
        } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error}`, data: null });
        }
    }
}
