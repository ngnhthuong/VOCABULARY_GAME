// // var roomServer = [];
// // var newRoom = {
// //   roomID: "abc",
// //   roomMember: [
// //     {
// //       playerID: '123',
// //       playerName: 'John Doe',
// //       playerScore: 0,
// //       playerAvatar: 'avatar.jpg',
// //     },
// //     {
// //       playerID: '456',
// //       playerName: 'Jane Doe',
// //       playerScore: 0,
// //       playerAvatar: 'avatar.jpg',
// //     },
// //   ],
// // };
// // roomServer.push(newRoom);
// // var playerIDToRemove = "123";
// // var roomIDToFind = "abc";

// // var foundRoomIndex = roomServer.findIndex(room => room.roomID === roomIDToFind);
// // console.log(foundRoomIndex);
// // if (foundRoomIndex !== -1) {
// //   roomServer[foundRoomIndex].roomMember = roomServer[foundRoomIndex].roomMember.filter(
// //     member => member.playerID !== playerIDToRemove
// //   );
// //   console.log(roomServer);
// // } else {
// //   console.log("Không tìm thấy room với roomID =", roomIDToFind);
// // }

// var roomServer = [];

// roomServer.push(newRoom);
// console.log(roomServer);

// // Them player
// const newRoomMember = {
//   playerID: "456",
//   playerName: "Jane Doe",
//   playerScore: 0,
//   playerAvatar: "avatar.jpg",
// };
// const findRoom = roomServer.findIndex((room) => room.roomID === newRoom.roomID);

// roomServer[findRoom].roomMember.push(newRoomMember);

// console.log(roomServer);

// // xoa player
// var foundRoomIndex = roomServer.findIndex(room => room.roomID === "abc");

// if (foundRoomIndex !== -1) {
//   roomServer[foundRoomIndex].roomMember = roomServer[foundRoomIndex].roomMember.filter(
//     member => member.playerID !== "456"
//   );
// }

// console.log(roomServer);

// const order = {
//   "_id": "657eb035895b7dd98c802795",
//   "products": [
//     {
//       "product": {
//         "_id": "6573fc6f8ee8a01579b4c779",
//         "name": "Nike Alpha Huarache Elite 4 Turf",
//         "slug": "nike-alpha-huarache-elite-4-turf",
//         "category": "6573eba1ae418be30157379b",
//         "description": "Make the memorable plays when it matters most. With sneaker-like comfort and multipurpose playability for all positions, this is the cleat that can help you impact the game for innings on end. An aggressive traction pattern and rubber pegs provide confidence and security when you race around the bags or get a bead on an incoming line drive in the field.",
//         "isFav": false,
//         "details": [
//           {
//             "price": 85,
//             "imageUrl": "https://static.nike.com/a/images/t_default/28fc3e84-2726-4ea0-8e5a-9e841cd03a55/alpha-huarache-elite-4-turf-womens-softball-shoes-253w2V.png",
//             "color": "6573f61cc74a57be481ad350",
//             "colorCode": "008000",
//             "quantity": 74,
//             "_id": "6573fc6f8ee8a01579b4c77a"
//           }
//         ],
//         "favoriteBy": [],
//         "ratingAvg": 0,
//         "sold": 9,
//         "ratingBy": [],
//         "createdAt": "2023-12-09T05:34:39.159Z",
//         "updatedAt": "2023-12-17T08:24:21.258Z"
//       },
//       "quantity": 3,
//       "color": "000000",
//       "_id": "657eaffe895b7dd98c802776"
//     }
//   ],
//   "paymentIntent": {
//     "id": "1igg8l0lq980wda",
//     "method": "COD",
//     "amount": 178.5,
//     "status": "Cash on Delivery",
//     "created": 1702801461213,
//     "currency": "usd"
//   },
//   "orderStatus": "Cash on Delivery",
//   "orderby": {
//     "_id": "6573ea3dc69782a9c042eb8c",
//     "fullname": "Nguyễn Tuấn Khoa",
//     "username": "ycode2023",
//     "email": "ycode2023@gmail.com",
//     "phone": "02437234"
//   },
//   "createdAt": "2023-12-17T08:24:21.214Z",
//   "updatedAt": "2023-12-17T08:24:21.214Z",
//   "__v": 0
// };

// console.log(order.products[0].product.name)


// You can now use the 'order' object in your JavaScript code.
// console.log(order);


// var = data.products.map((element) => element.product.name)