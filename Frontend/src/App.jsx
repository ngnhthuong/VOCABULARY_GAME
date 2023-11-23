// Import hook
import { useState } from 'react';
// Import css
import './App.css';
// Import component
import MainMenu from './assets/components/main-menu/MainMenu.jsx';
import Lobby from './assets/components/lobby/Lobby.jsx';

function App() {
  const [lobby, setLobby] = useState(false);
  function handleLobby(){
    setLobby(!lobby);
  }
  return (
    <main>
      <MainMenu lobby = {lobby} handleLobby={handleLobby}/>
      <Lobby  lobby = {lobby} handleLobby={handleLobby}/>
    </main>
  )
}

export default App
