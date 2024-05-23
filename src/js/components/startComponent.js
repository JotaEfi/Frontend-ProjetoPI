import React, { useState } from "react";
import { api } from "../../services/api";
// import ProjectContext from "./projectContext";
// import { useContext } from "react";

function ToDoComponents() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskBody, setNewTaskBody] = useState("");
  // const selectedProjectId = useContext(ProjectContext);

  const handleNewTaskTitleChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleNewTaskBodyChange =  (event) => {
    setNewTaskBody(event.target.value);
  };

  const handleAddTask =  async () => {
    if (!newTaskBody.trim()) {
      // Se a textarea estiver vazia ou contiver apenas espaços em branco, não faça nada
      return;
    }

    const newTask = {
      id: tasks.length + 5,
      title: newTaskTitle,
      description: newTaskBody,
      dueTime: null,
      situation: 0,
    };


    try {
      await api
      .post(`/projects/1/tasks`, { //mudar isso a medida do botao clicar
          title: newTask.title,
          description: newTask.description,
          dueTime: newTask.dueTime,
      },
    )
    
      .then((response) => {
        console.log(response.data);
        console.log('deu ceerto');
        // setProjects([...projects, response.data]); // Adiciona o novo projeto à lista de projetos
      // setShowModal(false);
        // window.location.href = '/tasks'; colocar isso só no componente que for criado, no caso o select
     
      });
    } catch (error) {
        console.error('Erro ao tentar criar projeto:', error);
        // Tratar o erro de acordo com as necessidades da sua aplicação
 

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
