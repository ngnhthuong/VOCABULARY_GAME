import './Lobby.css';
import DocksModel from '../dock/DocksModel';
import LobbyChat from './LobbyChat.jsx';
import LobbyFunction from './LobbyFunction.jsx';
import LobbyRoomList from './LobbyRoomList.jsx';

export default function Lobby({ lobby, handleLobby }) {
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
                    <div className="lobby-left flex--col">
                        <LobbyRoomList/>
                        <div className="lobby-chat-func flex--row">
                            <LobbyChat/>
                            <LobbyFunction/>
                        </div>
                    </div>
                    <div className="lobby-right box--shadow"></div>
                </div>
                <DocksModel/>
            </div>
        </div>
    )
}

//  