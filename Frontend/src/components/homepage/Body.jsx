import { TASK_DATA, EVENT_DATA } from "../../assets/data/dataMainMenu.js";
import cowImg from '../../public/cow.png';
import cowStart from '../../public/start.png';
export default function Body() {
    return (
        <div id="body" className="flex--row">
            
            <ul className="tasks flex--col">
                {TASK_DATA.map((task, indexTask) => (
                    <li className="task flex--col" key={indexTask}>
                        <div id="notification" className={`box--shadow ${task.notification === undefined ? 'close' : 'active'}`}>
                            <span>{task.notification}</span>
                        </div>
                        <img src={task.image} alt="error task" />
                        <p className="title-icon">{task.title}</p>
                    </li>
                ))}
            </ul>

            <ul className={`cow-start flex--col`}>
                <li className="cow">
                    <img src={cowImg} alt="error Cow" />
                </li>
                <li className="start">
                    <img src={cowStart} alt="error Start" />
                </li>
            </ul>
            
            <ul className="events flex--col">
                {EVENT_DATA.map((event, indexEvent) => (
                    <li className="event flex--col" key={indexEvent}>
                        <div id="notification" className={`box--shadow ${event.notification === undefined ? 'close' : 'active'}`}>
                            <span>{event.notification}</span>
                        </div>
                        <img src={event.image} alt="error event" />
                        <p className="title-icon">{event.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}