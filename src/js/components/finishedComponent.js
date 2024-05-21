import React, { useState } from "react";

function ToDoComponents() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskBody, setNewTaskBody] = useState("");

  const handleNewTaskTitleChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleNewTaskBodyChange = (event) => {
    setNewTaskBody(event.target.value);
  };

  const handleAddTask = () => {
    if (!newTaskBody.trim()) {
      // Se a textarea estiver vazia ou contiver apenas espaços em branco, não faça nada
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      body: newTaskBody,
      situation: 0,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskBody("");
  };

  return (
    <div className="tasksComponents">
      <h2>Finalizados</h2>
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <p className="taskName">{task.title}</p>
            <p className="descTask">{task.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoComponents;
