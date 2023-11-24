
export default function LobbyRoomList({ checkJoin, roomData }) {
    return (
        <div className="lobby-room-list  box--shadow flex--col">
            <div className="room-list-header flex--row">
                <p>ID</p>
                <p>OWNER</p>
                <p>QUANTITY</p>
                <p>FUNCTION</p>
            </div>
            <ul className="room-list flex--col">
                {roomData.map((room, roomIndex) => (
                    <li key={roomIndex} className="room flex--row box--shadow-title">
                        <p>{room.id}</p>
                        <p>{room.owner}</p>
                        <p>{room.now_member} / {room.max_member}</p>
                        <p className="room-list-function">
                            {room.full === false ? (
                                <button onClick={() => checkJoin(room.id)} className="box--shadow">
                                     <i className="fas fa-sign-in-alt"></i>
                                </button>
                            ) : (
                                <button className="full-label box--shadow">
                                     <i className="fas fa-ban"></i>
                                </button>
                            )}
                        </p>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}