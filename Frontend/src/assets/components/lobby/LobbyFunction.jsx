
export default function LobbyFunction({onDisplayCreateRoom}) {
    return (
        <div className="function flex--col">
            <div className="start-now ">
                <div className="box-animation">
                    <button className="box--shadow" >Start Now</button>
                </div>
            </div>
            <div className="find-create flex--row">
                <button onClick={onDisplayCreateRoom} className="create-room box--shadow">Create Room</button>
                <button className="find-room box--shadow">Search Room</button>
            </div>
        </div>
    )
}