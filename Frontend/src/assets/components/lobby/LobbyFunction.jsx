
export default function LobbyFunction() {
    return (
        <div className="lobby-function flex--col">
            <div className="start-now ">
                <button className="box--shadow" >Start Now</button>
            </div>
            <div className="find-create flex--row">
                <button className="create-room box--shadow">Create Room</button>
                <button className="find-room box--shadow">Search Room</button>
            </div>
        </div>
    )
}