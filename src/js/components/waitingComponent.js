import React from "react";

const TaskProps = {
  id: 0,
  title: "",
  body: "",
  situation: 0,
};

function ToDoComponents({ state, id, title, body, situation }) {
  return (
    <div className="tasksComponents">
      <h2>Em andamento</h2>
      <div className="tasks">
        <p className="taskName">{title}</p>
        <p className="descTask">{body}</p>
      </div>

      <button className="btnTask">+ Nova Task</button>
    </div>
  );
}

export default ToDoComponents;
