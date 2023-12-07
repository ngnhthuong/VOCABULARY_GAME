import Body from "../components/homepage/Body";
import Header from "../components/homepage/Header";
import Docks from "../components/dock/Docks";
import '../components/homepage/home_page.css';

export default function HomePage() {
    return (
        <>
            <div id="main-menu">
                <Header />
                <Body />
                <Docks/>
            </div>
        </>
    );
}

