import '../components/match/match.css';
import MatchMap from '../components/match/MatchMap';
import ChatInGame from '../components/match/ChatInGame';
import RankInGame from '../components/match/RankInGame';
import userImg1 from '../assets/images/player/user1.png';
import userImg2 from '../assets/images/player/user2.png';
import userImg3 from '../assets/images/player/user3.png';
import userImg4 from '../assets/images/player/user4.png';
import userImg5 from '../assets/images/player/user5.png';
import userImg6 from '../assets/images/player/user6.png';
import userImg7 from '../assets/images/player/user7.png';


export default function Match() {
    return (
        <div id="match-form">
            <div className="match-form__left box--shadow">
                <MatchMap/>
            </div>
            <div className='match-form__right'>
                <div className="math-form__right-chatrank box--shadow">
                    <RankInGame/>
                    <ChatInGame/>
                </div>
                <div className='ingame-setting box--shadow'>
                    <button className='box--shadow'>
                        <i className="fas fa-cog"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}