export default function PlayerList({ playerList }) {
    return (
        <ul className="player-lists flex--col">
            {
                playerList.map((player, playerIndex) => (
                    <li key={playerIndex} className="player-list flex--row box--shadow">
                        <div className="player-list-img">
                            <img src={player.avatar} alt="error data" />
                        </div>
                        <div className="player-list-information flex--col">
                            <p className="player-list-name">{player.name}</p>
                            <p>Rank: {player.ranking}</p>
                            <p>Elo: {player.elo}</p>
                            <div className="player-list__function flex--row">
                                <button className="watch-btn box--shadow">Watch</button>
                                <button className="invite-btn box--shadow">Invite</button>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}