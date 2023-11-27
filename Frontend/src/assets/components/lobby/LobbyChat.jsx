import React from 'react';
import './Lobby.css'
export default function LobbyChat({ userName }) {
    return (
        <div className="chat box--shadow flex--col">
            <div className='chatbox'>
                <ul className='messages'>
                    <li className='message'><div>{userName}</div><p>Are you interesting with my game?</p></li>
                    <li className='message'><div>{userName}</div><p>Yes I really interesting game</p></li>
                    <li className='message'><div>{userName}</div><p>Do you want put money to game?</p></li>
                    <li className='message'><div>{userName}</div><p>Of course, Game Cow Cow very interesting so I am going put money now!</p></li>
                </ul>
            </div>
            <div className='send-message'>
                <input className='box--shadow' type="text" id="message-input" name="message" placeholder="Type your message here" />
                <button className='sent-btn'>
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div >
    )
}