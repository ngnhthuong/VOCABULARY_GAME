import { useState } from "react";
import './create-search.css';
export default function CreateRoom({ onDisplay, onDisplayFC, onCreateRoom }) {

    const [createPlayer, setCreatePlayer] = useState(true);
    const [maxPlayers, setMaxPlayers] = useState(2);

    const handleCreatePlayerFive = () => {
        setCreatePlayer(!createPlayer)
        setMaxPlayers(5);
    }

    const handleCreatePlayerTwo = () => {
        setCreatePlayer(!createPlayer)
        setMaxPlayers(2);
    }

    const handleSubmitRoom = () => {
        onDisplayFC();
        onCreateRoom(maxPlayers);
        setCreatePlayer(true);
        setMaxPlayers(2);
    }

    return (
        <div className={`create-room-modal ${onDisplay ? 'open' : 'close'}`}>
            <div className="create-room-frame flex--col box--shadow">
                <div className="create-room-box">
                    <div className="create-room-box-main flex--col">
                        <button onClick={handleCreatePlayerTwo} className={createPlayer ? 'active-chose' : 'unactive-chose'}> Two players </button>
                        <button onClick={handleCreatePlayerFive} className={!createPlayer ? 'active-chose' : 'unactive-chose'}> Five players</button>
                    </div>
                </div>
                <div className="create-room-btn">
                    <button onClick={onDisplayFC} className="cancel box--shadow">
                        <i className="fas fa-times"></i>
                    </button>
                    <button onClick={handleSubmitRoom} className="create box--shadow">
                        <i className="fas fa-sign-in-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    )

}
