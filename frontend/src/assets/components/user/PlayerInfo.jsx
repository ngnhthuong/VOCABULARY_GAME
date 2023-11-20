import avatarImg from "../../image/information/user.png"
import "./user.css"
export default function PlayerInfo() {
    return (
        <div className="player-windows">
            <ul className="player-infor shadow--box">

                <li className="player-windows__header shadow--box">
                    <p>User Information</p>
                    <button className="close-windows shadow--box">
                        <i class="fas fa-times close-icon"></i>
                    </button>
                </li>

                <li className="player-infor__bottom">
                    <ul className="player-infor__user shadow--box">
                        <li className="player-name">
                            <p>Cow Cow</p>
                        </li>
                        <li className="avatar shadow--box">
                            <img src={avatarImg} alt="error avatar" />
                        </li>
                        <li className="player-elo">
                            <p>Elo: 1280</p>
                        </li>
                        <li className="player-elo">
                            <p>Ranking: 1</p>
                        </li>
                    </ul>
                    <ul className="player-infor__game">
                        <li className="player-display">
                            <ul className="player-display__details">
                                <li className="total-game shadow--box">
                                    <span>Match: </span>
                                    <span>1100</span>
                                </li>
                                <li className="game-winner__percent shadow--box">
                                    <span>Win percent: </span>
                                    <span>88%</span>
                                </li>
                            </ul>
                        </li>
                        <li className="match-history">
                            <ul className="matchs">
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 1500K</span>
                                    <span>|</span>
                                    <span>Elo:</span>
                                    <span>+10</span>
                                    <span>Time: 1p30s</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                                <li className="match">
                                    <span>Winner: Cow Cow</span>
                                    <span>|</span>
                                    <span>Time: Cow Cow</span>
                                    <span>|</span>
                                    <span>Bet: 15K</span>
                                    <span>|</span>
                                    <span>Elo: +10</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

