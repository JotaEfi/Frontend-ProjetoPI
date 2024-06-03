import React, { useState, useContext } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { TaskContext } from "../../services/taskContext";
import { useEffect } from "react";

function ToDoComponents() {
  const { tasks, setTasks, addTask, updateTaskStatus } = useContext(TaskContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskBody, setNewTaskBody] = useState("");
  const { projectId } = useParams();

  // Load tasks on component mount or project change
  useEffect(() => {
    loadTasks(projectId);
  }, [projectId]);

  const loadTasks = async (projectId) => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      let tasksFromStorage = storedTasks ? JSON.parse(storedTasks) : {};

      // Check if tasks exist for this project
      if (tasksFromStorage[projectId]) {
        setTasks(tasksFromStorage[projectId]);
        return;
      }

      // Fetch tasks from API if not found in localStorage or for new project
      const response = await api.get(`/projects/${projectId}/tasks`);
      const tasksData = response.data.content;
      tasksFromStorage[projectId] = tasksData;
      localStorage.setItem('tasks', JSON.stringify(tasksFromStorage));
      setTasks(tasksData);
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };

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
      const response = await api.post(`/projects/${projectId}/tasks`, {
        title: newTask.title,
        description: newTask.description,
        dueTime: newTask.dueTime,
      });
      console.log(response.data)
      const addedTask = response.data;
      addTask(addedTask);
      setNewTaskTitle("");
      setNewTaskBody("");

      // Update tasks in localStorage
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      storedTasks[projectId] = [...tasks, addedTask];
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    } catch (error) {
      console.error('Erro ao tentar criar tarefa:', error);
    }
  };

  const handleMoveToDoing = async (taskId) => {
    try {
      await api.put(`/projects/${projectId}/tasks/${taskId}`, { status: "DOING" });
      updateTaskStatus(taskId, "DOING");

      // Update tasks in state (remove from TODO and add to DOING)
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, status: "DOING" } : task
        ).filter(task => task.status !== "TODO")
      );

      // Update tasks in localStorage (remove from TODO and add to DOING)
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      storedTasks[projectId] = tasks.map(task =>
        task.id === taskId ? { ...task, status: "DOING" } : task
      ).filter(task => task.status !== "TODO");
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    } catch (error) {
      console.error('Erro ao mover tarefa para "DOING":', error);
    }
  };
  
    
  return (
    <div className="tasksComponents">
      <h2>Iniciar</h2>
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <p className="taskName">{task.title}</p>
            <p className="descTask">{task.description}</p>
            <div className="btnChange">
              <button className="btnFazer" onClick={() => handleMoveToDoing(task.id)}>fazer</button>
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

