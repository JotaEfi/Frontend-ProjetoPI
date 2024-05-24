import React, { useState } from "react";
import { api } from "../../services/api";
import { useEffect } from "react";

function ToDoComponents() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskBody, setNewTaskBody] = useState("");

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Função para carregar as tarefas do localStorage
  const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  // Carrega as tarefas do localStorage quando o componente é montado
  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  const handleNewTaskTitleChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleNewTaskBodyChange =  (event) => {
    setNewTaskBody(event.target.value);
  };

  const handleAddTask =  async () => {
    if (!newTaskBody.trim()) {
      return;
    }

    const newTask = {
      id: tasks.length + 6,
      title: newTaskTitle,
      description: newTaskBody,
      dueTime: null,
      situation: 0,
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
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
        saveTasksToLocalStorage(newTasks);
    
     
      });
    } catch (error) {
        console.error('Erro ao tentar criar projeto:', error);
 

    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskBody("");
  };

  return (
    <div className="tasksComponents">
      <h2>Iniciar</h2>
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <p className="taskName">{task.title}</p>
            <p className="descTask">{task.description}</p>
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
