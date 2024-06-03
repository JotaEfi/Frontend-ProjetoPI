import React, { useContext } from "react";
import { TaskContext } from "../../services/taskContext";
import { color } from "@chakra-ui/react";

function FinishedComponents() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="tasksComponents">
      <h2>Concluídas</h2>
      <div className="tasks">
      {tasks.filter(task => task.status === "DONE").length > 0 ? (
  tasks.filter(task => task.status === "DONE").map((task) => (
    <div key={task.id} className="task">
      <p className="taskName finished" >{task.title}</p>
    </div>
  ))
) : (
  <div>Não há tarefas concluídas</div>
)}
      </div>
    </div>
  );
}

export default FinishedComponents;
