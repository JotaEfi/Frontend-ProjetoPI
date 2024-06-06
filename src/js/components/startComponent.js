import React, { useState, useContext, useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { TaskContext } from "../../services/taskContext";
// import "./ToDoComponents.css"; // Importe o arquivo CSS para estilos personalizados

function ToDoComponents() {
  const { tasks, setTasks, addTask } = useContext(TaskContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskBody, setNewTaskBody] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [objectives, setObjectives] = useState([]);
  const [newObjectiveTitle, setNewObjectiveTitle] = useState("");
  const [newObjectiveDesc, setNewObjectiveDesc] = useState("");
  const [showAddTaskPopup, setShowAddTaskPopup] = useState(false);
  const [showObjectiveInputs, setShowObjectiveInputs] = useState(false);
  const [objectiveId, setObjectiveId] = useState(null);
  const [completedTasks, setCompletedTasks] = useState({});
  const { projectId } = useParams();

  const openAddTaskPopup = () => {
    setShowAddTaskPopup(true);
  };

  const closeAddTaskPopup = () => {
    setShowAddTaskPopup(false);
  };

  useEffect(() => {
    loadTasks(projectId);
  }, [projectId]);

  const updateObjective = async (taskId, objectiveId) => {
    const updatedObjective = {
      title: newObjectiveTitle,
      description: newObjectiveDesc,
      taskId: selectedTask.id,
    };

    try {
      const response = await api.put(`/projects/${projectId}/tasks/${taskId}/objectives/${objectiveId}`, updatedObjective);
      const updatedObjectiveData = response.data;

      setObjectives((prevObjectives) =>
        prevObjectives.map((objective) =>
          objective.id === updatedObjectiveData.id ? updatedObjectiveData : objective
        )
      );
      setShowObjectiveInputs(false);
      setObjectiveId(null); // Reset objectiveId after update
    } catch (error) {
      console.error("Erro ao tentar atualizar objetivo:", error);
    }
  };

  const loadTasks = async (projectId) => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      let tasksFromStorage = storedTasks ? JSON.parse(storedTasks) : {};

      if (tasksFromStorage[projectId]) {
        setTasks(tasksFromStorage[projectId]);
        return;
      }

      const response = await api.get(`/projects/${projectId}/tasks`);
      const tasksData = response.data.content;
      tasksFromStorage[projectId] = tasksData;
      localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
      setTasks(tasksData);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    }
  };

  const loadObjectives = async (taskId) => {
    try {
      const response = await api.get(`/projects/${projectId}/tasks/${taskId}/objectives`);
      const objectivesData = response.data.content;
      setObjectives(objectivesData);
    } catch (error) {
      console.error("Erro ao carregar objetivos:", error);
    }
  };

  const handleNewTaskTitleChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleNewTaskBodyChange = (event) => {
    setNewTaskBody(event.target.value);
  };

  const handleNewObjectiveTitleChange = (event) => {
    setNewObjectiveTitle(event.target.value);
  };

  const handleNewObjectiveDescChange = (event) => {
    setNewObjectiveDesc(event.target.value);
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
      const response = await api.post(`/projects/${projectId}/tasks`, {
        title: newTask.title,
        description: newTask.description,
        dueTime: newTask.dueTime,
      });
      const addedTask = response.data;
      addTask(addedTask);
      setNewTaskTitle("");
      setNewTaskBody("");

      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      storedTasks[projectId] = [...tasks, addedTask];
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    } catch (error) {
      console.error("Erro ao tentar criar tarefa:", error);
    }
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    loadObjectives(task.id);
    setShowObjectiveInputs(false);
  };

  const handleAddObjective = async () => {
    if (!newObjectiveTitle.trim() || !newObjectiveDesc.trim()) {
      return;
    }

    const newObjective = {
      title: newObjectiveTitle,
      description: newObjectiveDesc,
      classificationId: 1,
    };

    try {
      const response = await api.post(`/projects/${projectId}/tasks/${selectedTask.id}/objectives`, newObjective);
      const addedObjective = response.data;

      setObjectives([...objectives, addedObjective]);
      setNewObjectiveTitle("");
      setNewObjectiveDesc("");
      setShowObjectiveInputs(false); // Hide inputs after adding objective
    } catch (error) {
      console.error("Erro ao tentar criar objetivo:", error);
    }
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setObjectives([]);
  };

  const toggleObjectiveInputs = (id) => {
    setObjectiveId(id);
    setShowObjectiveInputs(true); // Show inputs when update button is clicked
  };

  const handleCompleteTask = (taskId) => {
    setCompletedTasks((prevCompletedTasks) => ({
      ...prevCompletedTasks,
      [taskId]: true,
    }));
  };

  return (
    <div>
      <div className="spaceProject">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`created-project-name tasks-mts ${completedTasks[task.id] ? "completed" : ""}`}
            onClick={() => !completedTasks[task.id] && handleTaskClick(task)}
          >
            <p className="taskName">{task.title}</p>
            <p className="descTask">{task.description}</p>
          </div>
        ))}
      </div>
      {showAddTaskPopup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeAddTaskPopup}>
              &times;
            </span>
            <h2>Adicionar Nova Tarefa</h2>
            <input
              type="text"
              value={newTaskTitle}
              onChange={handleNewTaskTitleChange}
              placeholder="Título da Nova Tarefa"
            />
            <input value={newTaskBody} onChange={handleNewTaskBodyChange} placeholder="Descrição da Nova Tarefa"></input>
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
          </div>
        </div>
      )}
      {selectedTask && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Tarefa: {selectedTask.title}</h2>
            <div className="containterObjective">
              {objectives.map((objective, index) => (
                <div key={index} className="objective">
                  <p className="titleObj">{objective.title}</p>
                  <p className="descObj">{objective.description}</p>
                  {!showObjectiveInputs && (
                    <button onClick={() => toggleObjectiveInputs(objective.id)}>Atualizar Objetivo</button>
                  )}
                </div>
              ))}
            </div>
            {showObjectiveInputs ? (
              <>
                <input
                  type="text"
                  value={newObjectiveTitle}
                  onChange={handleNewObjectiveTitleChange}
                  placeholder="Título do Novo Objetivo"
                />
                <input
                  value={newObjectiveDesc}
                  onChange={handleNewObjectiveDescChange}
                  placeholder="Descrição do Novo Objetivo"
                ></input>
                {objectiveId ? (
                  <button onClick={() => updateObjective(selectedTask.id, objectiveId)}>Salvar Objetivo</button>
                ) : (
                  <button onClick={handleAddObjective}>Salvar Objetivo</button>
                )}
              </>
            ) : (
              <>
              
                {!objectiveId && (
                  <button className="btnNovoObj" onClick={() => setShowObjectiveInputs(true)}>+ Novo Objetivo</button>
                )}
              </>
            )}
            <div>‎ </div>
            <button className="btnCompleted" onClick={() => handleCompleteTask(selectedTask.id)}>Concluir Tarefa</button>
          </div>
        </div>
      )}
      <button className="btnProject btnTarefa" onClick={() => openAddTaskPopup(true)}>
        <span>+</span> Nova Task
      </button>
    </div>
  );
}

export default ToDoComponents;
