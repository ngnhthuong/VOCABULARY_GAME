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

// function process vocabulary game separate
function rand(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeRandomPosition(arr) {
  for (let i = arr.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Dùng destructuring để hoán đổi giá trị
  }
  return arr;
}

function mixSingleWord(word) {
  var strings = [];
  var string = "";
  for (var i = 0; i < word.length; i += 2) {
    if (i % 2 == 0) {
      if (i === word.length - 1) {
        strings.push(word[i]);
      } else {
        string += word[i];
        string += word[i + 1];
        string += "/";
        strings.push(string);
      }
      string = "";
    }
  }
  makeRandomPosition(strings);
  for (var i = 0; i < strings.length; i++) string += strings[i];
  return string;
}

function AddQuess(word) {
  var text = mixSingleWord(word);
  if (text.endsWith("/")) {
    // Nếu có, xóa dấu "/" cuối cùng
    text = text.slice(0, -1);
  }
  return text;
}

// --------------------------------------------------------

var roomServer = [];
var vocabularyMap = [];

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
      roomStatus: true,
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
      } else {
        // Nếu không tìm thấy thành viên, thêm mới vào mảng roomMember
        roomServer[foundRoomIndex].roomMember.push(playerMember);
        var roomServerJSON = JSON.stringify(roomServer);
      }
    }

    // const rooms = io.sockets.adapter.rooms;
    // const newArray = Array.from(rooms, ([roomID, roomMember]) => ({
    //   roomID,
    //   roomMember: Array.from(roomMember),
    // }));
    // const filteredArray = newArray.filter((room) => room.roomID.length <= 7);

    // io.sockets.emit("return-rooms", filteredArray);
    io.sockets.emit("return-rooms", roomServer);

    console.log("room array is: ", roomServer);
    // return room created
    var foundRoomIndex = roomServer.findIndex(
      (room) => room.roomID === playerAuth.playerName
    );
    console.log("room", roomServer[foundRoomIndex]);
    io.sockets
      .in(roomServer[foundRoomIndex].roomID)
      .emit("return-room", roomServer[foundRoomIndex]);
    io.sockets
      .in(roomIDToFind)
      .emit("return-player-player", roomServer[foundRoomIndex]);
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
          // return player for bxh
          io.sockets
            .in(roomIDToFind)
            .emit("return-player-player", roomServer[foundRoomIndex]);
        }
      }
    }

    io.sockets.emit("return-rooms", roomServer);
    console.log("room array is: ", roomServer);
  });

  socket.on("room-found", (data) => {
    console.log("room-found", data);
    for (const [room, roomInfo] of socket.adapter.rooms) {
      if (room == data && roomInfo.size < 4) {
        const findIndexRoom = roomServer.findIndex(
          (room) => room.roomID === data
        );
        console.log("findIndexRoom", roomServer[findIndexRoom].roomStatus);
        if (roomServer[findIndexRoom].roomStatus === true) {
          const anounce = {
            requestMessage: true,
            message: "Join room success",
          };
          socket.emit("room-response", anounce);
        } else if (roomServer[findIndexRoom].roomStatus === false) {
          const anounce = {
            requestMessage: false,
            message: "Room is playing",
          };
          console.log("room is playing");
          socket.emit("room-response", anounce);
        }
      } else if (room == data && roomInfo.size >= 4) {
        const anounce = {
          requestMessage: false,
          message: "Room is full",
        };
        socket.emit("room-response", anounce);
      } else {
        const anounce = {
          requestMessage: false,
          message: "Room not exist",
        };
        socket.emit("room-response", anounce);
      }
    }
  });

  socket.on("get-rooms", () => {
    io.sockets.emit("return-rooms", roomServer);
  });

  socket.on("client-sendchat", (data) => {
    console.log(data);
    io.sockets.in(roomIDToFind).emit("server-sendchat", data);
  });

  socket.on("client-sendchat-ingame", (data) => {
    console.log(data);
    io.sockets.in(roomIDToFind).emit("server-sendchat-ingame", data);
  });
  socket.on("start-game-client", (data) => {
    // random area

    function uniqueRandomArray(n) {
      const arr = Array.from({ length: n }, (_, i) => i);
      for (let i = arr.length - 1; i > 0; i--) {
        const j = rand(i, 0);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    const roundValues = uniqueRandomArray(data.length);
    // gửi socket bắt đầu game
    data = data.map((vocab, index) => {
      const round = roundValues[index];
      const score = rand(50, 10);
      const location = index;
      return {
        ...vocab,
        wordSeparate: AddQuess(vocab.word),
        round,
        score,
        location,
      };
    });

    const dataMatch = {
      roomID: roomIDToFind,
      words: data,
    };
    // add dataMatch to vocabylaryMap
    vocabularyMap.push(dataMatch);
    // find area of dataMatch in vocabularyMap
    var foundDataMatch = vocabularyMap.findIndex(
      (match) => match.roomID === roomIDToFind
    );
    io.sockets
      .in(roomIDToFind)
      .emit("start-game-server", vocabularyMap[foundDataMatch]);
    var foundRound = vocabularyMap[foundDataMatch].words.findIndex(
      (word) => word.round === 0
    );
    io.sockets
      .in(roomIDToFind)
      .emit(
        "receive-round-server",
        vocabularyMap[foundDataMatch].words[foundRound]
      );

    // Đổi trạng thái phòng sang đang trong trận
    const roomToChange = roomServer.find(
      (room) => room.roomID === roomIDToFind
    );
    if (roomToChange) {
      roomToChange.roomStatus = false;
    }
    // dùng để gưi user player để hiển thị lên bhx trong game
    io.sockets
      .in(roomIDToFind)
      .emit("return-player-player", roomServer[roomToChange]);
    // Cập nhật lại trạng thái cho toàn bộ server
    console.log(roomServer);

    io.sockets.emit("return-rooms", roomServer);
  });

  socket.on("send-data-round", (data) => {
    console.log("here");
    console.log("data", data);
    var foundDataMatch = vocabularyMap.findIndex(
      (match) => match.roomID === roomIDToFind
    );
    var foundRound = vocabularyMap[foundDataMatch].words.findIndex(
      (word) => word.round === data
    );
    var preFoundRound = vocabularyMap[foundDataMatch].words.findIndex(
      (word) => word.round === data - 1
    );
    console.log(
      "foundRound",
      vocabularyMap[foundDataMatch].words[preFoundRound]
    );
    if (
      foundRound !== -1 &&
      vocabularyMap[foundDataMatch].words[preFoundRound].winner === null
    ) {
      console.log("here pre null");
      io.sockets
        .in(roomIDToFind)
        .emit(
          "receive-round-server",
          vocabularyMap[foundDataMatch].words[foundRound]
        );
    }
  });

  socket.on("request-round-after-roundwin", (data) => {
    console.log("here");
    console.log("data", data);
    var foundDataMatch = vocabularyMap.findIndex(
      (match) => match.roomID === roomIDToFind
    );
    var foundRound = vocabularyMap[foundDataMatch].words.findIndex(
      (word) => word.round === data
    );
    var preFoundRound = vocabularyMap[foundDataMatch].words.findIndex(
      (word) => word.round === data - 1
    );
    if (
      foundRound !== -1 &&
      vocabularyMap[foundDataMatch].words[preFoundRound].winner !== null
    ) {
      io.sockets
        .in(roomIDToFind)
        .emit(
          "receive-round-server",
          vocabularyMap[foundDataMatch].words[foundRound]
        );
    }
  });

  // correct answer
  socket.on("send-correct-answer", (data) => {
    console.log("correct answer");
    var foundDataMatch = vocabularyMap.findIndex(
      (match) => match.roomID === roomIDToFind
    );

    var foundRound = vocabularyMap[foundDataMatch].words.findIndex(
      (word) => word.round === data.round.round
    );

    if (vocabularyMap[foundDataMatch].words[foundRound].winner === null) {
      vocabularyMap[foundDataMatch].words[foundRound] = {
        ...vocabularyMap[foundDataMatch].words[foundRound],
        ...data.round,
      };

      var foundRoomIndex = roomServer.findIndex(
        (room) => room.roomID === roomIDToFind
      );
      var foundMemberIndex = roomServer[foundRoomIndex].roomMember.findIndex(
        (playerMember) => playerMember.playerName === data.playerName
      );
      roomServer[foundRoomIndex].roomMember[foundMemberIndex].playerScore +=
        data.score;
      var flagRoomServer = roomServer[foundRoomIndex];
      // sắp xếp lại thứ tự người chơi theo điểm
      flagRoomServer.roomMember.sort((a, b) => b.playerScore - a.playerScore);
      console.log("player after sort", flagRoomServer.roomMember);
      console.log(roomServer[foundRoomIndex].roomMember[foundMemberIndex]);
      io.sockets.in(roomIDToFind).emit("return-player-player", flagRoomServer);
      io.sockets
        .in(roomIDToFind)
        .emit(
          "receive-correct-answer",
          vocabularyMap[foundDataMatch].words[foundRound]
        );
      io.sockets
        .in(roomIDToFind)
        .emit("return-room", roomServer[foundRoomIndex]);
    }
  });

  // end game
  socket.on("send-round-endgame", (data) => {
    console.log("end game");
    // Xóa dữ liệu vừa chơi
    var foundDataMatch = vocabularyMap.findIndex(
      (match) => match.roomID === roomIDToFind
    );
    vocabularyMap.splice(foundDataMatch, 1);
    console.log(vocabularyMap);
    // Đổi trạng thái phòng sang room chờ
    const roomToChange = roomServer.find(
      (room) => room.roomID === roomIDToFind
    );
    if (roomToChange) {
      roomToChange.roomStatus = true;
    }
    // đổi lại điểm người chơi về 0
    var foundDataRoom = roomServer.findIndex(
      (room) => room.roomID === roomIDToFind
    );
    roomServer[foundDataRoom].roomMember.forEach((member) => {
      member.playerScore = 0;
    });

    // Cập nhật lại trạng thái cho toàn bộ server
    // Cập nhật lại về phòng
    io.sockets.emit("return-rooms", roomServer);
    // io.sockets.in(roomIDToFind).emit("return-room", roomServer[foundDataRoom]);
    io.sockets.in(roomIDToFind).emit("end-game-server", true);
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
      io.sockets.in(roomServer[foundRoomIndex].roomID).emit("return-room", roomServer[foundRoomIndex]);
    } else if (
      foundRoomIndex !== -1 &&
      roomServer[foundRoomIndex].roomMember.length === 1
    ) {
      roomServer.splice(foundRoomIndex, 1);
    }
    // return data for bxh
    io.sockets.in(roomIDToFind).emit("return-player-player", roomServer[foundRoomIndex]);
    // In ra dữ liệu roomServer
    console.log(roomServer);
    // Trả về dữ liệu server để cập nhật
    io.sockets.emit("return-rooms", roomServer);
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
