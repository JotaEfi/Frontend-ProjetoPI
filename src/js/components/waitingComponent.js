import React, { useContext } from "react";
import { TaskContext } from "../../services/taskContext";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

function DoingComponents() {
  const { tasks, setTasks, updateTaskStatus } = useContext(TaskContext);
  const { projectId } = useParams();

  const handleCompleteTask = async (taskId) => {
    try {
      await api.delete(`/projects/${projectId}/tasks/${taskId}`);
      updateTaskStatus(taskId, "DONE");
      setTasks(currentTasks => currentTasks.filter(task => task.id !== taskId));

      // Update tasks in localStorage
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      storedTasks[projectId] = storedTasks[projectId].filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    } catch (error) {
      console.error('Erro ao concluir tarefa:', error);
    }
  };

  return (
    <div className="tasksComponents">
      <h2>Fazendo</h2>
      <div className="tasks">
        {tasks.filter(task => task.status === "DOING").length > 0 ? (
          tasks.filter(task => task.status === "DOING").map((task) => (
            <div key={task.id} className="task">
              <p className="taskName">{task.title}</p>
              <p className="descTask">{task.description}</p>
              <div className="btnChange">
                <button className="btnFazer" onClick={() => handleCompleteTask(task.id)}>concluir</button>
              </div>
            </div>
          ))
        ) : (
          <div>Não há tarefas em andamento.</div>
        )}
      </div>
    </div>
  );
}

export default DoingComponents;

