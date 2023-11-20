import Gameboard from "./Gameboard";
import HeaderBoard from "./HeaderBoard";
import "./match.css";
export default function Match() {
    return (
        <div id="fatherzone">
            <div className="boardzone shadow--box">
                <HeaderBoard />
                <Gameboard />
            </div>
        </div>
    )
}