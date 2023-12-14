import userImg1 from '../../assets/images/player/user1.png';
import userImg2 from '../../assets/images/player/user2.png';
import userImg3 from '../../assets/images/player/user3.png';
import userImg4 from '../../assets/images/player/user4.png';
import userImg5 from '../../assets/images/player/user5.png';
import userImg6 from '../../assets/images/player/user6.png';
import userImg7 from '../../assets/images/player/user7.png';
export default function RankInGame() {
    return (
        <div className='player-ratings__ingame match-element__active-player box--shadow'>
            <div className='player-ratings__ingame-numbers box--shadow'>
                <div className="player-ratings__ingame-number player-ratings__ingame-number-border-left  ingame-top1 box--shadow">1</div>
                <div className="player-ratings__ingame-number ingame-top2 box--shadow">2</div>
                <div className="player-ratings__ingame-number ingame-top3 box--shadow">3</div>
                <div className="player-ratings__ingame-number ingame-top4 box--shadow">4</div>
            </div>
            <div className='player-ratings__ingame-information'>
                <div className="player-ratings__player-information player-ratings__player-information1 box--shadow">
                    <div className='player-ratings__player-information--avatar box--shadow' >
                        <img src={userImg1} alt="error" />
                    </div>
                    <div className='player-ratings__player-information--namescore'>
                        <p className='player-ratings__player-information--name'>Cowcow</p>
                        <p className='player-ratings__player-information--scorer'>Score: 1331</p>
                    </div>
                </div>
                <div className="player-ratings__player-information player-ratings__player-information2 box--shadow">
                    <div className='player-ratings__player-information--avatar box--shadow' >
                        <img src={userImg7} alt="error" />
                    </div>
                    <div className='player-ratings__player-information--namescore'>
                        <p className='player-ratings__player-information--name'>Hulaboly</p>
                        <p className='player-ratings__player-information--scorer'>Score: 1331</p>
                    </div>
                </div>
                <div className="player-ratings__player-information player-ratings__player-information3 box--shadow">
                    <div className='player-ratings__player-information--avatar box--shadow' >
                        <img src={userImg4} alt="error" />
                    </div>
                    <div className='player-ratings__player-information--namescore'>
                        <p className='player-ratings__player-information--name'>Minsum</p>
                        <p className='player-ratings__player-information--scorer'>Score: 1331</p>
                    </div>
                </div>
                <div className="player-ratings__player-information player-ratings__player-information4 box--shadow">
                    <div className='player-ratings__player-information--avatar box--shadow' >
                        <img src={userImg5} alt="error" />
                    </div>
                    <div className='player-ratings__player-information--namescore'>
                        <p className='player-ratings__player-information--name'>Ramboas</p>
                        <p className='player-ratings__player-information--scorer'>Score: 1331</p>
                    </div>
                </div>
            </div>
        </div>
    )
}