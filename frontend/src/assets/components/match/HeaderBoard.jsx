import settingMatchImg from "../../image/docks/setting.png"
import "./match.css";

export default function HeaderBoard() {
    return <div className="header-board">
        <ul className="header-board__lists">
            <li className="header-board__setting">
                <img src={settingMatchImg} alt="" />
            </li>            <li className="header-board__setting">
                <img src={settingMatchImg} alt="" />
            </li>
            <li className="header-board__setting">
                <img src={settingMatchImg} alt="" />
            </li>
        </ul>
    </div>
}