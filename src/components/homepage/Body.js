import { useRef, useState } from 'react';
import cowImg from '../../assets/images/formgame/cow.png';
import cowStart from '../../assets/images/formgame/start.png';
import taskImg from '../../assets/images/task/task.png'
import eventImg from '../../assets/images/event/fire.gif';
import giftImg from '../../assets/images/event/gift.png';
import ruleImg from '../../assets/images/docks/message.png';

import LobbyModal from './LobbyModal.js'

export default function Body() {
    const lobbyModal = useRef();
    function handleOpenModal(nameDialog) {
        if (nameDialog === 'lobby') {
            lobbyModal.current.open();
        }
    }
    return (
        <>
            <LobbyModal ref={lobbyModal} />
            <div id="body" className="flex--row">

                <ul className="tasks flex--col">
                    <li className="task flex--col">
                        <img src={taskImg} alt="error task" />
                        <p className="title-icon">Tasks</p>
                    </li>
                </ul>

                <ul onClick={() => handleOpenModal("lobby")} className={`cow-start flex--col`}>
                    <li className="cow">
                        <img src={cowImg} alt="error Cow" />
                    </li>
                    <li className="start">
                        <img src={cowStart} alt="error Start" />
                    </li>
                </ul>

                <ul className="events flex--col">

                    <li className="event flex--col">
                        <img src={eventImg} alt="error event" />
                        <p className="title-icon">Fire</p>
                    </li>

                    <li className="event flex--col">
                        <img src={giftImg} alt="error event" />
                        <p className="title-icon">Fire</p>
                    </li>

                    <li className="event flex--col">
                        <img src={ruleImg} alt="error event" />
                        <p className="title-icon">Fire</p>
                    </li>
                </ul>
            </div>
        </>
    )
}