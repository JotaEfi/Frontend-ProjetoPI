import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { api } from "../../services/api.js";

function DoneProject() {
  const [projects, setProjects] = useState([]);
  const userId = localStorage.getItem("userId");

  const getProjects = async () => {
    try {
      const response = await api.get(`/users/${userId}/projects`);
      const userProjects = response.data.content;
      const projectsWithDoneClassification = [];

      for (const project of userProjects) {
        const classifications = await getProjectClassifications(project.id);
        const doneClassification = classifications.find(
          (classification) => classification.title === "Done"
        );

        if (doneClassification) {
          projectsWithDoneClassification.push(project);
        }
      }

      setProjects(projectsWithDoneClassification);
    } catch (error) {
      console.error("Erro ao carregar projetos do usuário:", error);
    }
  };

  const getProjectClassifications = async (projectId) => {
    try {
      const response = await api.get(`/projects/${projectId}/classifications`);
      return response.data.content;
    } catch (error) {
      console.error(`Erro ao carregar classificações do projeto ${projectId}:`, error);
      return [];
    }
  };


  const handleProjectClick = (projectId) => {
    window.location.href = `/projects/${projectId}/tasks`;
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
    
    
        <div className="tasksComponents projectComponent">
          <h2>Concluído</h2>
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project) => (
              <div className="task projectContainer" key={project.id}>
                <div className="projectName finished" onClick={() => handleProjectClick(project.id)}>
                  {project.name}
                </div>
                
              </div>
            ))
          ) : (
            <p>Nenhum projeto encontrado.</p>
          )}
        </div>
 
    </>
  );
}

export default DoneProject;
