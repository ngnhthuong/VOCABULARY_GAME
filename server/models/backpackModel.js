const mongoose = require("mongoose");
const backpackSchema = new mongoose.Schema(
    {
        img: { type: String, required: true, default: '/static/media/rank2.d8f8b5e1e0e116f5ba61.png' },
        name: { type: String, required: true, default: 'name' },
        quantity: { type: Number, required: true, default: 1 },
        price: { type: Number, required: true, default: 10 },
    },
    {
        timestamps: true,
    }
)