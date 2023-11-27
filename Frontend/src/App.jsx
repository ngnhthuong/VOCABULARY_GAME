// Import hook
import { useEffect, useState } from 'react';
import { ROOMS_DATA, PLAYERLIST_DATA, PLAYER_DATA } from './assets/data/dataMainMenu.js';
// Import css
import './App.css';
// Import component
import MainMenu from './assets/components/main-menu/MainMenu.jsx';
import Lobby from './assets/components/lobby/Lobby.jsx';
import InGame from './assets/components/in-game/InGame.jsx';

function App() {
  const [user, setUser] = useState(PLAYER_DATA);
  const [lobby, setLobby] = useState(false);
  const handleLobby = () => { setLobby(!lobby) };
  const [roomID, setRoomID] = useState(null);
  const [rooms, setRooms] = useState([...ROOMS_DATA]);
  const [playerList, setPlayerList] = useState([...PLAYERLIST_DATA]);
  const [inGame, setInGame] = useState(false);
  const [inRoom, setInRoom] = useState(false);

  // LOBBY ROOM
  const handleSetInRoom = () => {
    setInRoom(!inRoom);
  };

  const handleSetInGame = () => {
    setInGame(!inGame);
  };

  return (
    <main>
      <MainMenu lobby={lobby} handleLobby={handleLobby} />
      <Lobby
        userID={user}
        roomID={roomID}
        lobby={lobby}
        rooms={rooms}
        playerList={playerList}
        inRoom={inRoom}
        setRooms={setRooms}
        handleLobby={handleLobby}
        setRoomID={setRoomID}
        handleSetInRoom={handleSetInRoom}
        handleSetInGame={handleSetInGame}
      />
      <InGame
        userID={user}
        roomID={roomID}
        roomData={rooms}
        displayInGame={inGame}
      />
    </main>
  )
}

export default App
