
export default function RoomFunction({handleSetInGame,roomID,checkJoin}) {
    return (
        <div className="room-function flex--col">
            <div className="room-start-leave flex--col">
                <div onClick={handleSetInGame} className="box-animation">
                    <button className="box--shadow" >Start Now</button>
                </div>
                <div onClick={()=>checkJoin(roomID)} className="box-animation">
                    <button className="box--shadow leave-room">
                        <i className="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}