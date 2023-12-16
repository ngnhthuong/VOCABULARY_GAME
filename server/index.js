const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const playerRoute = require("./routes/playerRoute");
const rankingRoute = require("./routes/rankingRoute");
const cors = require("cors");
const fs = require("fs");
// Cors
app.use(cors({ origin: true, credentials: true }));

//---------------------------------------------------------- socket io ----------------------------------------------------------
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("create-room", (roomID) => {
    socket.join(roomID);
    console.log("user create room", roomID);
    console.log(socket.adapter.rooms);

    const rooms = io.sockets.adapter.rooms;
    const newArray = Array.from(rooms, ([roomID, roomMember]) => ({
      roomID,
      roomMember: Array.from(roomMember),
    }));
    const filteredArray = newArray.filter(room => room.roomID.length <= 7);
    console.log(filteredArray);
    socket.emit("return-rooms", filteredArray);
  });
  console.log("user connected", socket.id);

  socket.on("room-found", (data) => {
    var flag = false;
    for (const [room, roomInfo] of socket.adapter.rooms) {
      if (room == data && roomInfo.size < 4) {
        flag = true;
        socket.emit("room-response", true);
      }
    }
    if (flag == false) {
      socket.emit("room-response", false);
    }
  });

  socket.on("get-rooms", () => {
    const rooms = io.sockets.adapter.rooms;
    const newArray = Array.from(rooms, ([roomID, roomMember]) => ({
      roomID,
      roomMember: Array.from(roomMember),
    }));
    const filteredArray = newArray.filter(room => room.roomID.length <= 7);
    console.log(filteredArray);
    socket.emit("return-rooms", filteredArray);
  });

  socket.on("join-room", (roomID) => {
    for (var i of socket.adapter.rooms.keys()) {
      if (i == roomID) {
        socket.join(roomID);
        console.log("user join room", roomID);
      }
    }
    console.log(socket.adapter.rooms);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//---------------------------------------------------------- MongoDB connect -----------------------------------------------------
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

// Routes
app.use("/api/", playerRoute);
app.use("/api/ranking", rankingRoute);

// Port
// app.listen(PORT, () => {
//   console.log(`Server running PORT: http://localhost:${PORT}`);
// });
// const io = socketServer(app);
