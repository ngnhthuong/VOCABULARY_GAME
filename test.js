// var roomServer = [];
// var newRoom = {
//   roomID: "abc",
//   roomMember: [
//     {
//       playerID: '123',
//       playerName: 'John Doe',
//       playerScore: 0,
//       playerAvatar: 'avatar.jpg',
//     },
//     {
//       playerID: '456',
//       playerName: 'Jane Doe',
//       playerScore: 0,
//       playerAvatar: 'avatar.jpg',
//     },
//   ],
// };
// roomServer.push(newRoom);
// var playerIDToRemove = "123";
// var roomIDToFind = "abc";

// var foundRoomIndex = roomServer.findIndex(room => room.roomID === roomIDToFind);
// console.log(foundRoomIndex);
// if (foundRoomIndex !== -1) {
//   roomServer[foundRoomIndex].roomMember = roomServer[foundRoomIndex].roomMember.filter(
//     member => member.playerID !== playerIDToRemove
//   );
//   console.log(roomServer);
// } else {
//   console.log("Không tìm thấy room với roomID =", roomIDToFind);
// }

var roomServer = [];

roomServer.push(newRoom);
console.log(roomServer);

// Them player
const newRoomMember = {
  playerID: "456",
  playerName: "Jane Doe",
  playerScore: 0,
  playerAvatar: "avatar.jpg",
};
const findRoom = roomServer.findIndex((room) => room.roomID === newRoom.roomID);

roomServer[findRoom].roomMember.push(newRoomMember);

console.log(roomServer);

// xoa player
var foundRoomIndex = roomServer.findIndex(room => room.roomID === "abc");

if (foundRoomIndex !== -1) {
  roomServer[foundRoomIndex].roomMember = roomServer[foundRoomIndex].roomMember.filter(
    member => member.playerID !== "456"
  );
}

console.log(roomServer);