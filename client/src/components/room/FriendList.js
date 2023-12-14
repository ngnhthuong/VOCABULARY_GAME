import userImg1 from '../../assets/images/player/user1.png';
import userImg2 from '../../assets/images/player/user2.png';
import userImg3 from '../../assets/images/player/user3.png';
import userImg4 from '../../assets/images/player/user4.png';
import userImg5 from '../../assets/images/player/user5.png';
import userImg6 from '../../assets/images/player/user6.png';
import userImg7 from '../../assets/images/player/user7.png';

export default function FriendList(){
    return (
        <ul className='room-body__friends'>
            <li className='room-body__friend box--shadow'>
                <div className='room-body__friend--avatar'>
                    <img src={userImg1} alt="error" />
                </div>
                <div className='room-body__friend--information'>
                    <p className='room-body__friend--name'>CowCow</p>
                    <p>Ranking: 1</p>
                    <p>Elo: 1000</p>
                    <button className='room-body__friend--invite box--shadow'>
                        <i className="fas fa-user-plus"></i>
                    </button>
                </div>
            </li>
            <li className='room-body__friend box--shadow'>
                <div className='room-body__friend--avatar'>
                    <img src={userImg7} alt="error" />
                </div>
                <div className='room-body__friend--information'>
                    <p className='room-body__friend--name'>CowCow</p>
                    <p>Ranking: 1</p>
                    <p>Elo: 1000</p>
                    <button className='room-body__friend--invite box--shadow'>
                        <i className="fas fa-user-plus"></i>
                    </button>
                </div>
            </li>
            <li className='room-body__friend box--shadow'>
                <div className='room-body__friend--avatar'>
                    <img src={userImg3} alt="error" />
                </div>
                <div className='room-body__friend--information'>
                    <p className='room-body__friend--name'>CowCow</p>
                    <p>Ranking: 1</p>
                    <p>Elo: 1000</p>
                    <button className='room-body__friend--invite box--shadow'>
                        <i className="fas fa-user-plus"></i>
                    </button>
                </div>
            </li>
            <li className='room-body__friend box--shadow'>
                <div className='room-body__friend--avatar'>
                    <img src={userImg4} alt="error" />
                </div>
                <div className='room-body__friend--information'>
                    <p className='room-body__friend--name'>CowCow</p>
                    <p>Ranking: 1</p>
                    <p>Elo: 1000</p>
                    <button className='room-body__friend--invite box--shadow'>
                        <i className="fas fa-user-plus"></i>
                    </button>
                </div>
            </li>
            <li className='room-body__friend box--shadow'>
                <div className='room-body__friend--avatar'>
                    <img src={userImg5} alt="error" />
                </div>
                <div className='room-body__friend--information'>
                    <p className='room-body__friend--name'>CowCow</p>
                    <p>Ranking: 1</p>
                    <p>Elo: 1000</p>
                    <button className='room-body__friend--invite box--shadow'>
                        <i className="fas fa-user-plus"></i>
                    </button>
                </div>
            </li>
            <li className='room-body__friend box--shadow'>
                <div className='room-body__friend--avatar'>
                    <img src={userImg6} alt="error" />
                </div>
                <div className='room-body__friend--information'>
                    <p className='room-body__friend--name'>CowCow</p>
                    <p>Ranking: 1</p>
                    <p>Elo: 1000</p>
                    <button className='room-body__friend--invite box--shadow'>
                        <i className="fas fa-user-plus"></i>
                    </button>
                </div>
            </li>
            <li className='room-body__friend box--shadow'>
                <div className='room-body__friend--avatar'>
                    <img src={userImg7} alt="error" />
                </div>
                <div className='room-body__friend--information'>
                    <p className='room-body__friend--name'>CowCow</p>
                    <p>Ranking: 1</p>
                    <p>Elo: 1000</p>
                    <button className='room-body__friend--invite box--shadow'>
                        <i className="fas fa-user-plus"></i>
                    </button>
                </div>
            </li>
            <li className='room-body__friend box--shadow'>
                <div className='room-body__friend--avatar'>
                    <img src={userImg1} alt="error" />
                </div>
                <div className='room-body__friend--information'>
                    <p className='room-body__friend--name'>CowCow</p>
                    <p>Ranking: 1</p>
                    <p>Elo: 1000</p>
                    <button className='room-body__friend--invite box--shadow'>
                        <i className="fas fa-user-plus"></i>
                    </button>
                </div>
            </li>
        </ul>
    )
}