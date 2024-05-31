import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(currentTasks => currentTasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };
  
  

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
