import { PLAYER_DATA } from "../../assets/data/dataMainMenu.js";
import buyGoldImg from "../../assets/images/finance/buygold.png"
import silverImg from "../../assets/images/finance/silver.png"
import goldImg from "../../assets/images/finance/gold.png"

export default function Header() {
    return (
        <header id='header' className='flex--row'>
            <div id="player-rank__div" className="flex--row">
                <section id="main-player" className="flex--row box--shadow">
                    <div id="avatar" className="box--shadow">
                        <img src={PLAYER_DATA.avatar} alt="avatar" />
                    </div>
                    <ul id="information-player" className="flex--col">
                        <li className="name-player">
                            <p>Nhat Thuong</p>
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

            <div id="finance" className="flex--row">
                <ul className="finance-area buy-gold box--shadow flex--row">
                    <li className="buy-gold__img">
                        <img src={buyGoldImg} alt="buygold" />
                    </li>
                    <li className="buy-gold__title">BUY GOLD</li>
                </ul>
                <ul className="finance-area box--shadow flex--row">
                    <li className="silver-img">
                        <img src={silverImg} alt="" />
                    </li>
                    <li className="silver-number">
                        10
                    </li>
                    <li className="silver-button box--shadow">
                        <i className="fas fa-plus"></i>
                    </li>
                </ul>
                <ul className="finance-area box--shadow flex--row">
                    <li className="gold-img">
                        <img src={goldImg} alt="" />
                    </li>
                    <li className="gold-number">
                        99
                    </li>
                    <li className="gold-button box--shadow">
                        <i className="fas fa-plus"></i>
                    </li>
                </ul>
            </div>
        </header>
    )
}