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

var roomServer = [];
io.on("connection", (socket) => {
  var roomIDToFind = null;
  socket.on("create-room", (playerAuth) => {
    roomIDToFind = playerAuth.playerName;
    socket.join(playerAuth.playerName);
    console.log(socket.adapter.rooms);
    // player information
    var playerMember = {
      playerID: playerAuth._id,
      playerSocket: socket.id,
      playerName: playerAuth.playerName,
      playerScore: 0,
      playerAvatar: playerAuth.avatar,
    };
    // room information
    var newRoom = {
      roomID: playerAuth.playerName,
      roomMember: [playerMember],
    };

    var foundRoomIndex = roomServer.findIndex(
      (room) => room.roomID === playerAuth.playerName
    );

    if (foundRoomIndex === -1) {
      roomServer.push(newRoom);
      var roomServerJSON = JSON.stringify(roomServer);
      console.log("Room not exist: ", roomServerJSON);
    } else {
      var foundMemberIndex = roomServer[foundRoomIndex].roomMember.findIndex(
        (playerMember) => playerMember.playerName === playerAuth.playerName
      );
      if (foundMemberIndex !== -1) {
        // Cập nhật thông tin người chơi trong mảng roomMember
        roomServer[foundRoomIndex].roomMember[foundMemberIndex] = playerMember;
        var roomServerJSON = JSON.stringify(roomServer);
        console.log("Update player Exist: ", roomServerJSON);
      } else {
        // Nếu không tìm thấy thành viên, thêm mới vào mảng roomMember
        roomServer[foundRoomIndex].roomMember.push(playerMember);
        var roomServerJSON = JSON.stringify(roomServer);
        console.log("Add new player to existing room: ", roomServerJSON);
      }
    }

    const rooms = io.sockets.adapter.rooms;
    const newArray = Array.from(rooms, ([roomID, roomMember]) => ({
      roomID,
      roomMember: Array.from(roomMember),
    }));

    const filteredArray = newArray.filter((room) => room.roomID.length <= 7);
    io.sockets.emit("return-rooms", filteredArray);
    console.log("room array is: ", filteredArray);
    // return room created
    var foundRoomIndex = roomServer.findIndex(
      (room) => room.roomID === playerAuth.playerName
    );
    console.log("room", roomServer[foundRoomIndex]);
    io.sockets
      .in(roomServer[foundRoomIndex].roomID)
      .emit("return-room", roomServer[foundRoomIndex]);
  });

  socket.on("join-room", (playerMemberJoin) => {
    roomIDToFind = playerMemberJoin.roomID;
    console.log("playerMemberJoin", playerMemberJoin);
    var playerMember = {
      playerID: playerMemberJoin.playerID,
      playerSocket: socket.id,
      playerName: playerMemberJoin.playerName,
      playerScore: playerMemberJoin.playerScore,
      playerAvatar: playerMemberJoin.playerAvatar,
    };

    for (var i of socket.adapter.rooms.keys()) {
      if (i == playerMemberJoin.roomID) {
        socket.join(playerMemberJoin.roomID);
        console.log("user join room", playerMemberJoin.roomID);
        var foundRoomIndex = roomServer.findIndex(
          (room) => room.roomID === playerMemberJoin.roomID
        );
        if (foundRoomIndex !== -1) {
          var foundMemberIndex = roomServer[
            foundRoomIndex
          ].roomMember.findIndex(
            (playerMember) =>
              playerMember.playerName === playerMemberJoin.playerName
          );
          if (foundMemberIndex !== -1) {
            // Cập nhật thông tin người chơi trong mảng roomMember
            roomServer[foundRoomIndex].roomMember[foundMemberIndex] =
              playerMember;
            var roomServerJSON = JSON.stringify(roomServer);
            console.log("Update player Exist: ", roomServerJSON);
          } else {
            // Nếu không tìm thấy thành viên, thêm mới vào mảng roomMember
            roomServer[foundRoomIndex].roomMember.push(playerMember);
            var roomServerJSON = JSON.stringify(roomServer);
            console.log("Add new player to existing room: ", roomServerJSON);
          }
          var foundRoomIndex = roomServer.findIndex(
            (room) => room.roomID === playerMemberJoin.roomID
          );
          console.log("room", roomServer[foundRoomIndex]);
          io.sockets
            .in(roomServer[foundRoomIndex].roomID)
            .emit("return-room", roomServer[foundRoomIndex]);
        }
      }
    }
    const rooms = io.sockets.adapter.rooms;
    const newArray = Array.from(rooms, ([roomID, roomMember]) => ({
      roomID,
      roomMember: Array.from(roomMember),
    }));
    const filteredArray = newArray.filter((room) => room.roomID.length <= 7);
    io.sockets.emit("return-rooms", filteredArray);
    console.log("room array is: ", filteredArray);
    console.log(socket.adapter.rooms);
  });

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
    const filteredArray = newArray.filter((room) => room.roomID.length <= 7);
    console.log(filteredArray);
    io.sockets.emit("return-rooms", filteredArray);
  });

  socket.on("client-sendchat", (data) => {
    console.log(data);
    io.sockets.in(roomIDToFind).emit("server-sendchat", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", roomIDToFind);
    var foundRoomIndex = roomServer.findIndex(
      (room) => room.roomID === roomIDToFind
    );
    if (
      foundRoomIndex !== -1 &&
      roomServer[foundRoomIndex].roomMember.length > 1
    ) {
      roomServer[foundRoomIndex].roomMember = roomServer[
        foundRoomIndex
      ].roomMember.filter((member) => member.playerSocket !== socket.id);
      console.log(roomServer);

      io.sockets
        .in(roomServer[foundRoomIndex].roomID)
        .emit("return-room", roomServer[foundRoomIndex]);
    } else if (
      foundRoomIndex !== -1 &&
      roomServer[foundRoomIndex].roomMember.length === 1
    ) {
      roomServer.splice(foundRoomIndex, 1);
    }
    const rooms = io.sockets.adapter.rooms;
    const newArray = Array.from(rooms, ([roomID, roomMember]) => ({
      roomID,
      roomMember: Array.from(roomMember),
    }));
    const filteredArray = newArray.filter((room) => room.roomID.length <= 7);
    // console.log(filteredArray);
    console.log(roomServer);
    io.sockets.emit("return-rooms", filteredArray);
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
