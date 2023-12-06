// Import css
import './home_page.css';
// Import component 
import Header from './Header.jsx';
import Body from './Body.jsx';
import Docks from '../../assets/components/dock/Docks.jsx';
export default function MainMenu(){
    return(
        <div id="main-menu">
            <Header/>
            <Body/>
            <Docks/>
        </div>
    )
}