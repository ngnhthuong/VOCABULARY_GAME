import { DOCKS_DATA } from "../../data/dataMainMenu";
import './docks.css';

export default function DocksModel(){
    return <ul className="docks-model box--shadow flex--row">
        {DOCKS_DATA.map((dock, dockIndex)=> (
            <li className="dock-model flex--col" key={dockIndex}>
                <img src={dock.image} alt="dock error" />
                <p className="title-icon-model">{dock.title}</p>
            </li>
        ))}
    </ul>
}