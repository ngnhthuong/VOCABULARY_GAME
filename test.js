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

// var beforeVocabularyArray = [
//     "Sun",
//     "Clouds",
//     "Ocean",
//     "Mountains",
//     "Rose",
//     "Piano",
//     "Books",
//     "Mobile",
//     "Earth",
//     "Hero",
//     "Moon",
//     "City",
//     "Family",
//     "Park",
//     "Street",
//     "Artist",
//     "food",
//     "Computer",
//     "lights",
//     "Travel",
//     "Adventure",
//     "worker",
//     "Coffee",
//     "Rainbow",
//     "Waves",
//     "nice",
//     "Dreams",
//     "Butterfly",
//     "Serenity",
//     "Galaxy",
//     "Magic",
//     "Journey",
//     "Harmony"
//   ];

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
  
  // Test the function with a single word
//   var result = AddQuess("meanss");
//   console.log(result);


var data = [     
    {
        word: "Sun",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Clouds",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Ocean",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Mountains",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Rose",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Piano",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Books",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Mobile",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Earth",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Hero",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Moon",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "City",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Family",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Park",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Street",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Artist",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "food",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Computer",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "lights",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Travel",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Adventure",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Coffee",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "worker",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
      {
        word: "Rainbow",
        wordSeparate: null,
        round: null,
        score: null,
        winner: null,
      },
]

data = data.map((vocab) => {
    return {...vocab, wordSeparate: AddQuess(vocab.word)};
})

function uniqueRandomArray(n) {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
        const j = rand(i, 0);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const roundValues = uniqueRandomArray(data.length);

data = data.map((vocab, index) => {
    const round = roundValues[index];
    const score = rand(20, 0); // Chỉ là một giả định, bạn có thể thay đổi theo nhu cầu
    return { ...vocab, round, score };
});

console.log(data);


// console.log(data);
  