import { useState } from 'react';
import './Lobby.css';
import DocksModel from '../dock/DocksModel';
import LobbyChat from './LobbyChat.jsx';
import LobbyFunction from './LobbyFunction.jsx';
import LobbyRoomList from './LobbyRoomList.jsx';
import PlayerList from './LobbyPlayerList.jsx';
import RoomParticipants from './room-lobby/RoomParticipants.jsx';
import RoomFunction from './room-lobby/RoomFunction.jsx';
import { ROOMS_DATA, PLAYERLIST_DATA } from '../../data/dataMainMenu.js';

export default function Lobby({ lobby, handleLobby }) {
    const [inRoom, setInRoom] = useState(false); /*in room?*/
    const [roomID, setRoomID] = useState(null);
    function handleJoinTeam(){
        setInRoom(!inRoom);
    }

    function joinRoom(id_room){
        setRoomID(()=> {return id_room});
        handleJoinTeam();
    }

    function outRoom(){
        setRoomID(()=>{return null});
        handleJoinTeam();
    }


    return (
        <div className={`lobby-outside ${lobby ? 'open' : 'close'}`}>
            <div className="lobby-modal box--shadow">
                <div className="lobby-header flex--row">
                    <div className="lobby-title">
                        <p>Lobby Room</p>
                        <div onClick={handleLobby} className="lobby-close__zone">
                            <div className="lobby-close box--shadow">
                                <i class="fas fa-times close-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lobby flex--row">
                    <div className={`lobby-left flex--col ${inRoom ? 'close' : 'open'}`}>
                        <LobbyRoomList checkJoin = {joinRoom}  roomData = {ROOMS_DATA}/>
                        <div className="lobby-chat-func flex--row">
                            <LobbyChat />
                            <LobbyFunction />
                        </div>
                    </div>
                    <div className={`lobby-left flex--col ${inRoom ? 'open' : 'close'}`}>
                        <RoomParticipants roomID = {roomID} roomData={ROOMS_DATA} />
                        <div className="lobby-chat-func flex--row">
                            <LobbyChat />
                            <RoomFunction checkJoin = {outRoom}/>
                        </div>
                    </div>
                    <div className="lobby-right box--shadow">
                        <PlayerList playerList={PLAYERLIST_DATA} />
                    </div>
                </div>
                <DocksModel />
            </div>
        </div>
    )
}

//  