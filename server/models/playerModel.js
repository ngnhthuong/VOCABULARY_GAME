const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    avatar: { type: String, default: '/static/media/user1.8bddcc6f49eac12d9a7f.png'},
    rank: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rank",
      },
    ],
    exp: { type: Number, required: true, default: 1 },
    power: { type: Number, required: true, default: 1 },
    silver: { type: Number, required: true, default: 1 },
    gold: { type: Number, required: true, default: 1 },
    elo: { type: Number, required: true, default: 1000 },
    backpack: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Backpack",
      },
    ],
    store: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
      },
    ],
    playerName: { type: String  },
    refreshToken: { type: String },
    password: { type: String, required: true },
    active: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("player", playerSchema);