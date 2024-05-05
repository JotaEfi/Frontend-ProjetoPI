import React from "react"

function ToDoComponents () {
    return(
        <div className="tasksComponents">
            <h2>A Fazer</h2>
            <div className="tasks">
                <p className="taskName">Tasks 1</p>
                <p className="descTask">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus eget nunc tincidunt dignissim. </p>
            </div>

            <div className="tasks">
                <p className="taskName">Tasks 1</p>
                <p className="descTask">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus eget nunc tincidunt dignissim. </p>
            </div>
            <button className="btnTask">+ Nova Task</button>
        </div>
    )
}

export default ToDoComponents