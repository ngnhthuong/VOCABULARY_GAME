// Img Dock
import heroChartImg from '../images/docks/heroChart.png';
import storeImg from '../images/docks/store.png';
import backpackImg from '../images/docks/backpack.png';
import guildImg from '../images/docks/guild.png';
import friendImg from '../images/docks/friend.png';
import settingImg from '../images/docks/setting.png';
import messageImg from '../images/docks/message.png';


// Img Event
import eventImg from '../images/event/fire.gif';
import giftImg from '../images/event/gift.png';
// Img Task
import taskImg from '../images/task/task.png'

// Img Player
import avatarImg from '../images/player/user.png'
import frameImg from '../images/player/frame.png'
import rank1Img from '../images/rank/rank2.png'
// Data player

export const PLAYER_DATA= {
        name: 'Cow Cow',
        avatar: avatarImg,
        frameImg: frameImg,
        rank: rank1Img,
        Elo: 1000,
        exp: 98,
        pow: 56,
}

// Data task
export const TASK_DATA= [
    {
        title: 'Tasks',
        image: taskImg,
        notification: undefined,
    },
]

// Data event
export const EVENT_DATA= [
    {
        title: 'Event',
        image: eventImg,
        notification: undefined,
    },
    {
        title: 'Gift',
        image: giftImg,
        notification: undefined,
    },
]
// Data dock
export const DOCKS_DATA = [
    {
        title: 'Rankings',
        image: heroChartImg,
        notification: undefined,
    },
    {
        title: 'Store',
        image: storeImg,
        notification: undefined,
    },
    {
        title: 'Backpack',
        image: backpackImg,
        notification: undefined,
    },
    {
        title: 'Guild',
        image: guildImg,
        notification: undefined,
    },
    {
        title: 'Friends',
        image: friendImg,
        notification: 22,
    },
    {
        title: 'Messages',
        image: messageImg,
        notification: 12,
    },
    {
        title: 'Setting',
        image: settingImg,
        notification: undefined,
    },
]