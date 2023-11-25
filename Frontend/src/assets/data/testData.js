const PLAYER_DATA = {
    id: 1,
    name: 'Cow Cow',
    elo: 1000,
    exp: 98,
    pow: 56,
}


const ROOMS_DATA = [
    {
        id: 103,
        owner: 'Cow Ahu',
        member: [
            {
                id: 5,
                name: 'Cow Cow',
                elo: 1000,
                ranking: 1,
                exp: 98,
                pow: 56,
                caption: 1,
            },
            {
                id: 4,
                name: 'Dark Dark',
                elo: 1000,
                ranking: 12,
                exp: 98,
                pow: 56,
                caption: null,
            },
            {
                id: 3,
                name: 'Bum Bum',
                elo: 1000,
                ranking: 18,
                exp: 98,
                pow: 56,
                caption: null,
            },
            {
                id: 2,
                name: 'Shut Shut',
                elo: 1000,
                ranking: 7,
                exp: 98,
                pow: 56,
                caption: null,
            },
        ],
        max_member: 5,
        now_member: 0,
    },
]

ROOMS_DATA.forEach(room => {
    room.now_member = room.member.length;
});

// console.log(ROOMS_DATA)

// ROOMS_DATA.forEach((room) => {
//     if(room.id === 103){
//         room.member.push(PLAYER_DATA);
//     }
// })

// ROOMS_DATA.forEach(room => {
//     room.now_member = room.member.length;
// });

const userID = 2;

ROOMS_DATA.forEach(room => {
    if(room.id === 103){
        // const updatedMembers = room.member.filter(user => user.id !== userID);
        const deleteUser = room.member.filter(user => user.id !== userID);
        room.now_member = deleteUser.length;
        room.member = deleteUser;
    }
});

// ROOMS_DATA.forEach(room => {
//     if (room.id === 103) {
//         // Sử dụng filter để tạo mảng mới không chứa người chơi có id là userID
//         const updatedMembers = room.member.filter(user => user.id !== userID);
        
//         // Cập nhật lại now_member dựa trên độ dài của mảng thành viên mới
//         room.now_member = updatedMembers.length;
        
//         // Cập nhật mảng thành viên trong phòng
//         room.member = updatedMembers;
        
//         console.log(updatedMembers); // In ra mảng thành viên mới của phòng có id là 103
//     }
// });

console.log(ROOMS_DATA)