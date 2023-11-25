
export default function RoomParticipants({ checkJoin, roomID, roomData }) {
    return (
        <div className="lobby-room-participants box--shadow flex--col">
            <div className="room-participants-header flex--row">
                <p>Room ID: {roomID}</p>
                <p>Player</p>
                <p>Ranking</p>
                <p>Elo</p>
                <p></p>
            </div>
            <ul className="room-participants-list flex--col">
                {roomData.map((room) =>
                    room.id === roomID ? (
                        room.member.map((participant, participantIndex) => (
                            <li key={participantIndex} className="participant flex--row box--shadow-title" >
                                <div className="participant-avatar flex--row">
                                        <img src={participant.avatar} alt="" />
                                </div>
                                <p className="participant-name">{participant.name}</p>
                                <p>{participant.ranking}</p>
                                <p>{participant.elo}</p>
                                <p className="room-participant-function flex--row">
                                    <button className="box--shadow">
                                        <i className="fas fa-eye fa-eye"></i>
                                    </button>
                                    <button className="delete box--shadow">
                                        <i className="fas fa-times fa-x"></i>
                                    </button>
                                </p>
                            </li>
                        ))
                    ) : null
                )}
            </ul>
        </div >
    )
}
