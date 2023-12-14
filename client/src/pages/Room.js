import '../components/room/room.css';
import '../components/match/match.css';
import ChatRoom from '../components/room/Chat';
import FriendList from '../components/room/FriendList';
import MiddleRoom from '../components/room/MiddleRoom';
import MatchMap from '../components/match/MatchMap.js';
import ChatInGame from '../components/match/ChatInGame';
import RankInGame from '../components/match/RankInGame';
import userImg1 from '../assets/images/player/user1.png';
import userImg2 from '../assets/images/player/user2.png';
import userImg3 from '../assets/images/player/user3.png';
import userImg4 from '../assets/images/player/user4.png';
import userImg5 from '../assets/images/player/user5.png';
import userImg6 from '../assets/images/player/user6.png';
import userImg7 from '../assets/images/player/user7.png';

export default function Room() {
    return (
        <>
            <div className='background-modal__room'>
                <div className='room box--shadow'>
                    <div className='room-header'>
                        <div className='room-title'>
                            <div className='room-title__child'>
                                <p>R O O M</p>
                            </div>
                        </div>
                        <div className='room-close'>
                            <button className='box--shadow'>
                                <i className="fas fa-times close--icon"></i>
                            </button>
                        </div>
                        <div className='room-id'>
                            <button className='box--shadow'>ID: 111</button>
                        </div>
                    </div>
                    <div className='room-body'>
                        <div className='room-body__left box--shadow'>
                            {/* Friends List */}
                            <FriendList />
                        </div>
                        <div className='room-body__middle box--shadow'>
                            {/* Function and player */}
                            <MiddleRoom />
                        </div>
                        <div className='room-body__right box--shadow'>
                            {/* Chat Room */}
                            <ChatRoom />
                        </div>
                    </div>
                </div>
            </div>
            <div id="match-form" className='display-none'>
                <div className="match-form__left box--shadow">
                    <MatchMap />
                </div>
                <div className='match-form__right'>
                    <div className="math-form__right-chatrank box--shadow">
                        <RankInGame />
                        <ChatInGame />
                    </div>
                    <div className='ingame-setting box--shadow'>
                        <button className='box--shadow'>
                            <i className="fas fa-cog"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};