// Import css
import './main-menu.css';
// Import component 
import Header from './header/Header.jsx';
import Body from './body/Body.jsx';
import Docks from '../dock/Docks.jsx';
export default function MainMenu({handleLobby}){
    return(
        <div id="main-menu">
            <Header/>
            <Body handleLobby={handleLobby}/>
            <Docks/>
        </div>
    )
}