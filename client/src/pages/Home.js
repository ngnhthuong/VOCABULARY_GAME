import Body from "../components/homepage/Body.js";
import Header from "../components/homepage/Header.js";
import Docks from "../components/dock/Docks.js";
import "../components/homepage/home_page.css";
export default function HomePage() {
  return (
    <>
      <div id="main-menu">
        <Header />
        <Body />
        <Docks />
      </div>
    </>
  );
}
