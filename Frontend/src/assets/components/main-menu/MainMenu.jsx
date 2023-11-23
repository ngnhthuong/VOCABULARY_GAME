// Import css
import './main-menu.css';
// Import component 
import Header from './header/Header';
import Body from './body/body';
import Docks from '../dock/Docks';
export default function MainMenu({handleLobby}){
    return(
        <div id="main-menu">
            <Header/>
            <Body handleLobby={handleLobby}/>
            <Docks/>
        </div>
    )
}