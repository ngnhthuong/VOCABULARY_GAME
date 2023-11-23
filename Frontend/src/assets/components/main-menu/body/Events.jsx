
export default function Events({eventsData}){
    return (
        <ul className="events flex--col">
            {eventsData.map((event, indexEvent) => (
                <li className="event flex--col" key={indexEvent}>
                    <img src={event.image} alt="error event" />
                    <p className="title-icon">{event.title}</p>
                </li>
            ))}
        </ul>
    )
}