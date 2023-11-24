
export default function RoomFunction() {
    return (
        <div className="room-function flex--col">
            <div className="room-start-leave flex--col">
                <div className="box-animation">
                    <button className="box--shadow" >Start Now</button>
                </div>
                <div className="box-animation">
                    <button className="box--shadow leave-room">
                        <i className="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}