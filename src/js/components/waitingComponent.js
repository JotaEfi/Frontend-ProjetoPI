import React, { useContext } from "react";
import { TaskContext } from "../../services/taskContext";

function DoingComponents() {
  const { tasks, updateTaskStatus } = useContext(TaskContext);

  return (
    <div className="tasksComponents">
      <h2>Fazendo</h2>
      <div className="tasks">
        {tasks.filter((task) => task.status === "DOING").length > 0 ? (
          tasks
            .filter((task) => task.status === "DOING")
            .map((task) => (
              <div key={task.id} className="task">
                <div className="task-information">
                  {" "}
                  <p className="taskName">{task.title}</p>
                  <p className="descTask">{task.description}</p>
                </div>

                <div className="btnChange">
                  <button onClick={() => updateTaskStatus(task.id, "DONE")}>
                    concluir
                  </button>
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
