const playerModel = require("../models/playerModel");
const dotenv = require("dotenv");
const CryptoJS = require("crypto-js");
const validIdMogo = require("../utils/validMongoDB");
dotenv.config();
module.exports = {
  login: async (req, res) => {
    try {
      const player = await playerModel.findOne({ email: req.body.email });
      if (!player) {
        return res.status(404).json({ message: "Email Not found" });
      }
      const decryptPassword = CryptoJS.AES.decrypt(
        player.password,
        process.env.SECRET
      ).toString(CryptoJS.enc.Utf8);

      if (decryptPassword !== req.body.password) {
        return res.status(401).json({ message: "Wrong password" });
      }
      const updatePlayer = await playerModel.findByIdAndUpdate(player._id, {
        new: true,
      });
      res
        .status(201)
        .json({ message: "Login account successfully", data: updatePlayer });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Internal Server Error ${error}`, data: null });
    }
  },
  register: async (req, res) => {
    try {
      const existingUser = await playerModel.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
      if (req.body.password !== req.body.confirmpassword) {
        return res.status(400).json({ message: "Password does not match" });
      }
      function generateRandomUsername(length) {
        const charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let username = "";

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          username += charset.charAt(randomIndex);
        }
        return username;
      }
      const username_random = generateRandomUsername(7);
      let existinglayerName = await playerModel.findOne({
        playerName: username_random,
      });
      while (existinglayerName) {
        const username_random = generateRandomUsername(7);
        existinglayerName = await playerModel.findOne({
          playerName: username_random,
        });
      }
      const newPlayer = new playerModel({
        email: req.body.email,
        playerName: username_random,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET
        ).toString(),

        confirmpassword: CryptoJS.AES.encrypt(
          req.body.confirmpassword,
          process.env.SECRET
        ).toString(),
      });
      await newPlayer.save();
      res
        .status(201)
        .json({ message: "Account created successfully", data: newPlayer });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Internal Server Error ${error}`, data: null });
    }
  },
  updatePlayer: async (req, res) => {
    const { id } = req.params;
    validIdMogo(id);
    try {

      const playerName_check = await playerModel.findOne({
        playerName: req.body.playerName,
      });

      if (playerName_check) {
        return res.status(401).json({ message: "User name exist" });
      }

      const player = await playerModel.findByIdAndUpdate(
        id,
        {
          playerName: req.body.playerName,
          avatar: req.body.avatar,
          active: true,
        },
        { new: true }
      );

      if (!player) {
        return res.status(404).json({ message: "Player not found" });
      }

      res
        .status(200)
        .json({ message: "Update player successfully", data: player });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Internal Server Error ${error}`, data: null });
    }
  },
  getPlayer: async (req, res) => {
    const { id } = req.params;
    validIdMogo(id);
    try {
      const player = await playerModel.findById(id);
      if (!player) {
        return res.status(404).json({ message: "Player not found" });
      }
      res
        .status(200)
        .json({ message: "Get player successfully", data: player });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Internal Server Error ${error}`, data: null });
    }
  },
  getAllPlayer: async (req, res) => {
    try {
      const player = await playerModel.find();
      res
        .status(200)
        .json({ message: "Get all player successfully", data: player });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Internal Server Error ${error}`, data: null });
    }
  },
  deleteAllPlayer: async (req, res) => {
    try {
      const player = await playerModel.deleteMany();
      res
        .status(200)
        .json({ message: "Delete all player successfully", data: player });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Internal Server Error ${error}`, data: null });
    }
  },
  // getPlayerName: async (req, res) => {sed
  //   try {
  //     const player = await playerModel.findOne({playerName: req.params.playername});
  //     console.log(player);
  //     res.status(200).json({ message: "Get player successfully", data: player });
  //   } catch (error) {
  //     res.status(500).json({ message: `Internal Server Error ${error}`, data: null });
  //   }
  // },
};
