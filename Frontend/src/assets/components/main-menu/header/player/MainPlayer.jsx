import { PLAYER_DATA } from "../../../../data/dataMainMenu";
export default function MainPlayer() {
    return (
        <div id="player-rank__div" className="flex--row">
            <section id="main-player" className="flex--row box--shadow">
                <div id="avatar" className="box--shadow">
                    <img src={PLAYER_DATA.avatar} alt="avatar" />
                </div>
                <ul id="information-player" className="flex--col">
                    <li className="name-player">
                        <p>{PLAYER_DATA.name}</p>
                    </li>
                    <li className="exp-player flex--row">
                        <span>EXP</span>
                        <div className="exp-real box--shadow">
                            <div className="exp-current box--shadow"></div>
                        </div>
                    </li>
                    <li className="pow-player flex--row">
                        <span>POW</span>
                        <div className="pow-real box--shadow">
                            <div className="pow-current box--shadow"></div>
                        </div>
                    </li>
                </ul>
            </section>
            <section id="rank" className="box--shadow">
                <img src={PLAYER_DATA.rank} alt="" />
            </section>
        </div>
    )
}