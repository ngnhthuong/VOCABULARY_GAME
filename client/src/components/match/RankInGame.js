import { useEffect } from 'react';
import userImg1 from '../../assets/images/player/user1.png';
import userImg2 from '../../assets/images/player/user2.png';
import userImg3 from '../../assets/images/player/user3.png';
import userImg4 from '../../assets/images/player/user4.png';
import userImg5 from '../../assets/images/player/user5.png';
import userImg6 from '../../assets/images/player/user6.png';
import userImg7 from '../../assets/images/player/user7.png';
export default function RankInGame({dataRoom, playerAuth}) {
    useEffect(() => {
        if(dataRoom!==null){
            const playerRatings = document.querySelectorAll(".player-ratings__player-information--avatar");
            const playerNames = document.querySelectorAll(".player-ratings__player-information--name");
            const playerScores = document.querySelectorAll(".player-ratings__player-information--scorer");
            const playerAvts = document.querySelectorAll(".player-avt");
            console.log(playerNames)
            for(var i = 0; i < dataRoom.roomMember.length; i++){

                if (dataRoom.roomMember[i].playerName === playerAuth.playerName) {
                    playerNames[i].classList.add("player__highlightCurrent");
                    playerRatings[i].classList.remove("opacity__0");
                    playerNames[i].textContent = dataRoom.roomMember[i].playerName;
                    playerScores[i].textContent = dataRoom.roomMember[i].playerScore;
                    playerAvts[i].setAttribute("src", dataRoom.roomMember[i].playerAvatar);
                } else {
                    playerNames[i].classList.remove("player__highlightCurrent");
                    playerRatings[i].classList.remove("opacity__0");
                    playerNames[i].textContent = dataRoom.roomMember[i].playerName;
                    playerScores[i].textContent = dataRoom.roomMember[i].playerScore;
                    playerAvts[i].setAttribute("src", dataRoom.roomMember[i].playerAvatar);
                }
            }
        }
    }, [dataRoom])
    return (
        <div className='player-ratings__ingame match-element__active-player box--shadow'>
            <div className='player-ratings__ingame-numbers box--shadow'>
                <div className="player-ratings__ingame-number player-ratings__ingame-number-border-left  ingame-top1 box--shadow">1</div>
                <div className="player-ratings__ingame-number ingame-top2 box--shadow">2</div>
                <div className="player-ratings__ingame-number ingame-top3 box--shadow">3</div>
                <div className="player-ratings__ingame-number ingame-top4 box--shadow">4</div>
            </div>
            <div className='player-ratings__ingame-information '>
                <div className="player-ratings__player-information player-ratings__player-information1 box--shadow">
                    <div className='player-ratings__player-information--avatar box--shadow  opacity__0' >
                        <img className='player-avt' src="" alt="error" />
                    </div>
                    <div className='player-ratings__player-information--namescore'>
                        <p className='player-ratings__player-information--name player__highlightCurrent'></p>
                        <p className='player-ratings__player-information--scorer'></p>
                    </div>
                </div>
                <div className="player-ratings__player-information player-ratings__player-information2 box--shadow">
                    <div className='player-ratings__player-information--avatar box--shadow  opacity__0' >
                        <img className='player-avt' src="" alt="error" />
                    </div>
                    <div className='player-ratings__player-information--namescore'>
                        <p className='player-ratings__player-information--name'></p>
                        <p className='player-ratings__player-information--scorer'></p>
                    </div>
                </div>
                <div className="player-ratings__player-information player-ratings__player-information3 box--shadow">
                    <div className='player-ratings__player-information--avatar box--shadow  opacity__0' >
                        <img className='player-avt' src="" alt="error" />
                    </div>
                    <div className='player-ratings__player-information--namescore'>
                        <p className='player-ratings__player-information--name'></p>
                        <p className='player-ratings__player-information--scorer'></p>
                    </div>
                </div>
                <div className="player-ratings__player-information player-ratings__player-information4 box--shadow">
                    <div className='player-ratings__player-information--avatar box--shadow opacity__0' >
                        <img className='player-avt' src="" alt="error" />
                    </div>
                    <div className='player-ratings__player-information--namescore'>
                        <p className='player-ratings__player-information--name'></p>
                        <p className='player-ratings__player-information--scorer'></p>
                    </div>
                </div>
            </div>
        </div>
    )
}