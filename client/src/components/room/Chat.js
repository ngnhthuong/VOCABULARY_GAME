import userImg1 from '../../assets/images/player/user1.png';
import userImg2 from '../../assets/images/player/user2.png';
import userImg3 from '../../assets/images/player/user3.png';
import userImg4 from '../../assets/images/player/user4.png';
import userImg5 from '../../assets/images/player/user5.png';
import userImg6 from '../../assets/images/player/user6.png';
import userImg7 from '../../assets/images/player/user7.png';

export default function ChatRoom() {
    return (
        <>
            <div className='room-chat__title box--shadow'>
                <label>
                    CHAT
                </label>
            </div>
            <div className='room-chat'>
                <ul className='room-chat__list'>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg1} alt="error" />
                        </div>
                        <p><label className='box--shadow'>CowCow</label><> </>what the hell</p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg2} alt="error" />
                        </div>
                        <p><label className='box--shadow'>CowCow</label><> </>what the hell</p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg4} alt="error" />
                        </div>
                        <p><label className='box--shadow'>CowCow</label><> </>what the hell</p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg5} alt="error" />
                        </div>
                        <p><label className='box--shadow'>CowCow</label><> </>what the hell</p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg6} alt="error" />
                        </div>
                        <p><label className='box--shadow'>CowCow</label><> </>what the hell</p>
                    </li>
                    <li className='room-chat__message box--shadow'>
                        <div className='room-chat__message--avatar box--shadow'>
                            <img src={userImg7} alt="error" />
                        </div>
                        <p><label className='box--shadow'>CowCow</label><> </>what the hell</p>
                    </li>
                </ul>
            </div>
            <div className='room-chat__send box--shadow'>
                <textarea className='chat-textarea' type='textarea'>
                </textarea>
                <button>
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </>
    )
}


