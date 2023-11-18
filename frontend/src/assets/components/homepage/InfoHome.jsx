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
// NOTE IMPORT DATA
import { DOCKS_DATA } from "./dataHome.js";

// NOTE CSS
import "./InfoHome.css";

// FUNCTION (PARENT SHOW)
export default function InfoHome() {
    return <div>
        <Head />
        <BodyGame />
        <Docks />
    </div>
}

// FUNCTION INCLUDE HOME USER AND FINANCE <PARENT>
function Head() {
    return (
        <div className="header flex__center--row">
            <HomeUser />
            <Finance />
        </div>
    );
}
// FUNCTION  INCLUDE DETAILS INFORMATION USER, RANKING <PARENT>
function HomeUser() {
    const userName = "Cow Cow";
    const vip = "V1"
    const ranking = "1090";
    return (
        <div className="player flex__center--row">
            <PlayerInfo userName={userName} vip={vip} />
            <InfoHomeRank ranking={ranking} />
        </div>
    );
}
// FUNCTION  DETAILS INFORMATION USER (CHILD)
function PlayerInfo({ userName, vip }) {
    return (
        <div className="player__infor flex__center--row shadow--box">
            <div className="player__img shadow--box flex__center--column">
                <img src={userImg} alt="error UserImg" />
            </div>

            <div className="player__details">
                <div className="name">{userName}</div>
                <div className="exp flex__center--row">
                    <span>EXP</span>
                    <div className="exp__current shadow--box">
                        <div className="exp__real shadow--box"></div>
                    </div>
                </div>

                <div className="power flex__center--row">
                    <span>POW</span>
                    <div className="power__current shadow--box">
                        <div className="power__real shadow--box"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
// FUNCTION RANKING SHOW (CHILD)
function InfoHomeRank({ ranking }) {
    return (
        <div className="inforhome__rank flex__center--column shadow--box">
            <img src={rank3Img} alt="" />
        </div>
    );
}
// FUNCTION INCLUDE PUT MONEY, SILVER, MONEY <PARENT>
function Finance() {
    let silver = "100000";
    let money = "100000";
    return <div className="finance flex__center--row">
        <PutMoney />
        <Silver silver={silver} />
        <Money money={money} />
    </div>
}
// FUNCTION PUT MONEY (CHILD)
function PutMoney() {
    return <div className="putmoney flex__center--row shadow--box">
        <img src={moneypayImg} alt="error moneypay" />
        <span>Put money</span>
    </div>
}
// FUNCTION SILVER (CHILD)
function Silver({ silver }) {
    return <div className="silver flex__center--row shadow--box">
        <img src={silverImg} alt="error moneypay" />
        <div>{silver}</div>
        <button className="silver__add shadow--box">
            <i className="fas fa-plus"></i>
        </button>
    </div>
}
// FUNCTION MONEY (CHILD)
function Money({ money }) {
    return <div className="money flex__center--row shadow--box">
        <img src={moneyImg} alt="error moneypay" />
        <div>{money}</div>
        <button className="money__add shadow--box">
            <i className="fas fa-plus"></i>
        </button>
    </div>
}
// FUNCTION INCLUDE TASK DAILY, PLAY GAME, ACTIVITY <PARENT>
function BodyGame() {
    return <div className="bodygame flex__center--row">
        <TaskDaily />
        <PlayGame />
        <Activity />
    </div>
}
// FUNCTION TASK DAILY
function TaskDaily() {
    return <div className="taskdaily-left flex__center--column">
        <ul className="taskdaily">
            <li className="icon scale flex__center--column">
                <Notification notification={2} />
                <img src={taskImg} alt="error task" />
                <p>Tasks</p>
            </li>
        </ul>
    </div>
}
// FUNCTION PLAY GAME
function PlayGame() {
    return <div className="playgame flex__center--column scale">
        <img className="cow" src={cowImg} alt="error cow" />
        <img className="playcow" src={playcowImg} alt="error playcow" />
    </div>
}
// FUNCTION ACTIVITY
function Activity() {
    return <div className="activity-right flex__center--column">
        <ul className="activity">
            <li className="fire icon scale flex__center--column">
                <img src={fireImg} alt="error task" />
                <p>Events</p>
            </li>
            <li className="gift icon scale flex__center--column">
                <img src={giftImg} alt="error task" />
                <p>Gift</p>
            </li>
        </ul>
    </div>
}
// FUNCTION DOCKS
function Docks() {
    return (<div className="dock-bottom shadow--box flex__center--row">
        <ul className="docks flex__center--row">
            {DOCKS_DATA.map((dockItem) => <Dock key={dockItem.name} {...dockItem} />)}
        </ul>
    </div>)
}
// FUNCTION DOCKS
function Dock({ name, image, notification}) {
    return (
        <li className="dock scale flex__center--column">
            {notification === undefined ? (
                <>
                    <img src={image} alt="error task" />
                    <p>{name}</p>
                </>
            ) : (
                <>
                    <Notification notification={notification} />
                    <img src={image} alt="error task" />
                    <p>{name}</p>
                </>
            )}
        </li>)
}
// FUNCTION NOTIFICATION
function Notification({ notification }) {
    return (<div className="notification-number shadow--box">
        <p>{notification}</p>
    </div>)
}