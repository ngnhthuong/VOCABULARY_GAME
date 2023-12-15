const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const playerRoute = require("./routes/playerRoute");
const rankingRoute = require("./routes/rankingRoute");
const cors = require("cors");
// const "reflect-metadata";
// MongoDB connect
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error: ${err}`));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Cors
app.use(cors({ origin: true, credentials: true }));

// Routes
app.use("/api/", playerRoute);
app.use("/api/ranking", rankingRoute);

// Port
app.listen(PORT, () => {
  console.log(`Server running PORT: http://localhost:${PORT}`);
});
// const io = socketServer(app);
