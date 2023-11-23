
export default function Events({ eventsData }) {
    return (
        <ul className="events flex--col">
            {eventsData.map((event, indexEvent) => (
                <li className="event flex--col" key={indexEvent}>
                    <div id="notification" className={`box--shadow ${event.notification === undefined ? 'close' : 'active'}`}>
                        <span>{event.notification}</span>
                    </div>
                    <img src={event.image} alt="error event" />
                    <p className="title-icon">{event.title}</p>
                </li>
            ))}
        </ul>
    )
}