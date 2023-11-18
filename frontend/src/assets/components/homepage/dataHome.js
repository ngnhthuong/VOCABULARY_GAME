// NOTE IMG INFORMATION USER
import userImg from "../../image/information/user.png"
import moneyImg from "../../image/information/money.png"
import moneypayImg from "../../image/information/moneypay.png"
import silverImg from "../../image/information/silver.png"
import backgroundUserImg from "../../image/information/background_user.png"

// NOTE IMG RANK
import rank3Img from "../../image/ranking/rank3.png"

// NOTE IMG TASK DAILY
import taskImg from "../../image/task-daily/task.png"

// NOTE IMG PLAY GAME
import cowImg from "../../image/cowcow-body/cow.png"
import playcowImg from "../../image/cowcow-body/play_cow.png"

// NOTE IMG ACTIVITY
import fireImg from "../../image/activity/fire.gif"
import giftImg from "../../image/activity/gift.png"

// NOTE IMG DOCKS
import backpackImg from "../../image/docks/backpack.png"
import guildImg from "../../image/docks/guild.png"
import friendImg from "../../image/docks/friend.png"
import heroChartImg from "../../image/docks/heroChart.png"
import messageImg from "../../image/docks/message.png"
import settingImg from "../../image/docks/setting.png"
import storeImg from "../../image/docks/store.png"

export const DOCKS_DATA = [
    {
        name: 'Rankings',
        image: heroChartImg,
        notification: undefined,
    },
    {
        name: 'Store',
        image: storeImg,
        notification: undefined,
    },
    {
        name: 'Backpack',
        image: backpackImg,
        notification: undefined,
    },
    {
        name: 'Guild',
        image: guildImg,
        notification: undefined,
    },
    {
        name: 'Friends',
        image: friendImg,
        notification: 22,
    },
    {
        name: 'Messages',
        image: messageImg,
        notification: 12,
    },
    {
        name: 'Setting',
        image: settingImg,
        notification: undefined,
    },
]

// export const USER_DATA = {
//     userName: 'CowCow',
//     userImg: userImg,
//     frameImg: backgroundUserImg,
//     userRank: rank3Img,
//     userMoney: 100000,
//     userSilver: 100000,
// }