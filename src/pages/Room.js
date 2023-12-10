import '../components/room/room.css';
import ChatRoom from '../components/room/Chat';
import FriendList from '../components/room/FriendList';
import MiddleRoom from '../components/room/MiddleRoom';
export default function Room() {
    return (
        <div className='background-modal__room '>
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
                        <FriendList/>
                    </div>
                    <div className='room-body__middle box--shadow'>
                      {/* Function and player */}
                      <MiddleRoom/>
                    </div>
                    <div className='room-body__right box--shadow'>
                        {/* Chat Room */}
                        <ChatRoom/>
                    </div>
                </div>
            </div>
        </div>
    );
};