import './Lobby.css'
export default function LobbyChat() {
    return (
        <div className="lobby-chat box--shadow flex--col">
            <div className='chatbox'>
                <ul className='messages'>
                    <li className='message'>CowCow: Hello I am Thuong CowCow: Hello I am Thuong CowCow: Hello I am Thuong</li>
                    <li className='message'>MinMin: Hello I am Thuong</li>
                    <li className='message'>CowCow: Hello I am Thuong</li>
                    <li className='message'>MinMin: Hello I am Thuong</li>
                    <li className='message'>CowCow: Hello I am Thuong</li>
                    <li className='message'>MinMin: Hello I am Thuong</li>
                    <li className='message'>CowCow: Hello I am Thuong</li>
                    <li className='message'>MinMin: Hello I am Thuong</li>
                    <li className='message'>CowCow: Hello I am Thuong</li>
                    <li className='message'>MinMin: Hello I am Thuong</li>
                </ul>
            </div>
            <div className='send-message'>
                <input className='box--shadow' type="text" id="message-input" name="message" placeholder="Type your message here">
                </input>
                <button className='sent-btn'>
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    )
}