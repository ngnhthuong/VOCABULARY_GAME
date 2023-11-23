export default function Tasks({ taskData }) {
    return (
        <ul className="tasks flex--col">
            {taskData.map((task, indexTask) => (
                <li className="task flex--col" key={indexTask}>
                    <img src={task.image} alt="error task" />
                    <p className="title-icon">{task.title}</p>
                </li>
            ))}
        </ul>
    )
}
