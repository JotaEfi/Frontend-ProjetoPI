import React, { useState, useContext } from "react";
import { api } from "../../services/api";
import { TaskContext } from "../../services/taskContext";

function ToDoComponents({selectedProjectId}) {
  const { tasks, addTask, updateTaskStatus } = useContext(TaskContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskBody, setNewTaskBody] = useState("");

  const handleNewTaskTitleChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleNewTaskBodyChange = (event) => {
    setNewTaskBody(event.target.value);
  };

  const handleAddTask = async () => {
    if (!newTaskBody.trim()) {
      return;
    }

    const newTask = {
      id: tasks.length + 6,
      title: newTaskTitle,
      description: newTaskBody,
      dueTime: null,
      status: "TODO",
    };

    try {
      await api
      .post(`/projects/2/tasks`, { //mudar isso a medida do botao clicar
          title: newTask.title,
          description: newTask.description,
          dueTime: newTask.dueTime,
      },
    )
    
      .then((response) => {
        console.log(response.data);
        console.log('deu ceerto');
        addTask(newTask);
        setNewTaskTitle("");
        setNewTaskBody("");
        // saveTasksToLocalStorage(newTask);
    
     
      });
      
    
    } catch (error) {
      console.error('Erro ao tentar criar projeto:', error);
    }
  };

  return (
    <div className="tasksComponents">
      <h2>Iniciar</h2>
      <div className="tasks">
        {tasks.filter(task => task.status === "TODO").map((task) => (
          <div key={task.id} className="task">
            <p className="taskName">{task.title}</p>
            <p className="descTask">{task.description}</p>
            <div className="btnChange">
              <button onClick={() => updateTaskStatus(task.id, "DOING")}>fazer</button>
            </div>
          </div>
        ))}
      </div>

      <div className="tasks_component">
        <input
          type="text"
          value={newTaskTitle}
          onChange={handleNewTaskTitleChange}
          placeholder="Título da Nova Task"
        />
        <textarea
          value={newTaskBody}
          onChange={handleNewTaskBodyChange}
          placeholder="Descrição da Nova Task"
        ></textarea>

        <button className="btnTask" onClick={handleAddTask}>
          + Nova Task
        </button>
      </div>
    </div>
  );
}

export default ToDoComponents;
