// img rank
// number rank
// numberOfMatch
// win
// Lose
// winPercent
const mongoose = require("mongoose");
const rankingSchema = new mongoose.Schema(
    {
        rankingName: { type: String, required: true },
        img: { type: String, required: true},
        number: { type: Number, required: true , default: 999},
        numberOfMatch: { type: Number, required: true , default: 0},
        win: { type: Number, required: true     , default: 0},
        lose: { type: Number, required: true , default: 0},
        winPercent: { type: Number, required: true, default: 0 },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Ranking", rankingSchema);