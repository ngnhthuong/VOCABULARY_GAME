import userImg1 from '../../assets/images/player/user1.png';
import userImg2 from '../../assets/images/player/user2.png';
import userImg3 from '../../assets/images/player/user3.png';
import userImg4 from '../../assets/images/player/user4.png';
import userImg5 from '../../assets/images/player/user5.png';
import userImg6 from '../../assets/images/player/user6.png';
import userImg7 from '../../assets/images/player/user7.png';
export default function ChatInGame() {
    return (
        <div className='chat-ingame box--shadow'>
            <div className='chat-ingame__title box--shadow'></div>
            <div className='chat-ingame__message'>
                <ul className='room-chat__list room-chat__ingame--list'>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg1} alt="error" />
                        </div>
                        <p className='font-chat_ingame'><label className='box--shadow'>CowCow</label><> </>What the hell!</p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg2} alt="error" />
                        </div>
                        <p className='font-chat_ingame'><label className='box--shadow'>CowCow</label><> </>What the hell!</p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg4} alt="error" />
                        </div>
                        <p className='font-chat_ingame'><label className='box--shadow'>CowCow</label><> </>What the hell! </p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg5} alt="error" />
                        </div>
                        <p className='font-chat_ingame'><label className='box--shadow'>CowCow</label><> </>What the hell!</p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg6} alt="error" />
                        </div>
                        <p className='font-chat_ingame'><label className='box--shadow'>CowCow</label><> </>What the hell! </p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg7} alt="error" />
                        </div>
                        <p className='font-chat_ingame'><label className='box--shadow'>CowCow</label><> </>What the hell!</p>
                    </li>
                </ul>
            </div>
            <div className='room-chat__ingame--chatbox'>
                <textarea className='chat-ingame-textarea box--shadow' type='textarea'>
                </textarea>
                <button box--shadow>
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    )
}