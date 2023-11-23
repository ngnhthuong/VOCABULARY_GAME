import Tasks from "./Tasks";
import Events from "./Events";
import CowStart from "./Cowstart";
import { TASK_DATA, EVENT_DATA } from "../../../data/dataMainMenu";

export default function Body({handleLobby}){
    return (
        <div id="body" className="flex--row">
            <Tasks taskData = {TASK_DATA}/>
            <CowStart onOpen={handleLobby}/>
            <Events eventsData = {EVENT_DATA}/>
        </div>
    )
}