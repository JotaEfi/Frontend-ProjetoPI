import React, { useState } from 'react';

// Criação do Context
// Criação do Context
const ProjectContext = React.createContext();

// Criação do Provider
export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
   
    console.log(projectId)
  };

  return (
    <ProjectContext.Provider value={{ selectedProject, handleProjectClick }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
