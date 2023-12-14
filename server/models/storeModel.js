const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema(
    {
        img: { type: String, required: true, default: '/static/media/rank2.d8f8b5e1e0e116f5ba61.png' },
        name: { type: String, required: true, default: 'name' },
        price: { type: Number, required: true, default: 10 },
        description: { type: String, required: true, default: 'description' },
        quantity: { type: Number, required: true, default: 1 },
        isBuy: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Store", storeSchema);