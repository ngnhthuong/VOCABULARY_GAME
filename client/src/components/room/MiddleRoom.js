import userImg1 from '../../assets/images/player/user1.png';
import userImg2 from '../../assets/images/player/user2.png';
import userImg3 from '../../assets/images/player/user3.png';
import userImg4 from '../../assets/images/player/user4.png';
import userImg5 from '../../assets/images/player/user5.png';
import userImg6 from '../../assets/images/player/user6.png';
import userImg7 from '../../assets/images/player/user7.png';
import inRoomGame from '../../assets/images/formgame/inroom.gif';
import './check.css';
import { useState, useRef, useEffect } from 'react';
export default function MiddleRoom() {
    // function check() {
    //     let checkElements = document.querySelectorAll('.player-game');
    //     console.log(checkElements)
    //     for(let i = 0; i < checkElements.length; i++ ){
    //         console.log(checkElements[i]);
    //     }
    // };
    return (
        <>
            <div className='room-body__middle--players'>
                <div className='room-body__middle--player '>
                    <div className='player-game room-body__middle--player_1 box--shadow'>
                        <img src={userImg3} alt="error" />
                        <p>Cow Cow</p>
                        <div className='room-body__middle--function'>
                            <button className='room-body__middle--delete box--shadow'>
                                <i className="fas fa-user-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='room-body__middle--player'>
                    <div className='player-game room-body__middle--player_2 box--shadow'>
                        <img src={userImg2} alt="error" />
                        <p>Cow Cow</p>
                        <div className='room-body__middle--function'>
                            <button className='room-body__middle--delete box--shadow'>
                                <i className="fas fa-user-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className='room-body__middle--img'>
                        <img src={inRoomGame} alt="error gif" />
                    </div>
                    <div className=' player-game room-body__middle--player_3 box--shadow'>
                        <img src={userImg5} alt="error" />
                        <p>Cow Cow</p>
                        <button className='room-body__middle--delete box--shadow'>
                            <i className="fas fa-user-times"></i>
                        </button>
                    </div>
                </div>
                <div className='room-body__middle--player'>
                    <div className='player-game room-body__middle--player_4 box--shadow'>
                        <img src={userImg4} alt="error" />
                        <p>Cow Cow</p>
                        <div className='room-body__middle--function'>
                            <button className='room-body__middle--delete box--shadow'>
                                <i className="fas fa-user-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='room-body__middle--functions'>
                <div className='room-body__middle--function-game'>
                    <button className='invite-player box--shadow'>Invite</button>
                    <button className='leave-room box--shadow'>
                        <i className="fas fa-sign-out-alt"></i>
                    </button>
                </div>
                <div className='room-body__middle--start box-animation'>
                    <a href="/match">
                        <button className='room-body__middle--start-btn box--shadow'>
                            START
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}