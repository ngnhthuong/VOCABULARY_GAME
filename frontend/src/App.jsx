import InfoHome from "./assets/components/homepage/InfoHome.jsx";
import Match from "./assets/components/match/Match.jsx";
import PlayerInfo from "./assets/components/user/PlayerInfo.jsx";
import { useState } from 'react';

function App() {
  return (
    <div>
      <InfoHome />
      <PlayerInfo/>
    </div>
  );
}

export default App;
