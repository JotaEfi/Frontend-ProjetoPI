import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { api } from "../../services/api.js";

function StartProject() {
  const [projects, setProjects] = useState([]);
  const [doingProjects, setDoingProjects] = useState([]);
  const userId = localStorage.getItem("userId");

  const getProjects = async () => {
    try {
      const response = await api.get(`/users/${userId}/projects`);
      const userProjects = response.data.content;
      const projectsWithNothingClassification = [];

      for (const project of userProjects) {
        const classifications = await getProjectClassifications(project.id);
        const nothingClassification = classifications.find(
          (classification) => classification.title === "Nothing"
        );

        if (nothingClassification) {
          projectsWithNothingClassification.push(project);
        }
      }

      setProjects(projectsWithNothingClassification);
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

  const handleStartProject = async (project) => {
    const classifications = await getProjectClassifications(project.id);
    const nothingClassification = classifications.find(
      (classification) => classification.title === "Nothing"
    );

    if (nothingClassification) {
      try {
        await api.put(`/projects/${project.id}/classifications/${nothingClassification.id}`, {
          title: "Started",
          projectId: project.id
        });
        setProjects((prevProjects) =>
          prevProjects.filter((p) => p.id !== project.id)
        );
        setDoingProjects((prevProjects) => [...prevProjects, project]);
        console.log(`Projeto ${project.name} iniciado.`);
      } catch (error) {
        console.error(`Erro ao atualizar classificação do projeto ${project.id}:`, error);
      }
    } else {
      console.error(`Classificação 'Nothing' não encontrada para o projeto ${project.id}.`);
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
          <h2>Iniciar</h2>
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project) => (
              <div className="task projectContainer" key={project.id}>
                <div className="projectName" onClick={() => handleProjectClick(project.id)}>
                  {project.name}
                </div>
                <div className="descProject">
                  {project.description}
                </div>
                <div className="descStartDate">
                  Data Inicial:
                  {project.startDate}
                </div>
                <div className="descEndDate">
                  Data Final:
                  {project.endDate}
                </div>
                <button className="btnFazer" onClick={() => handleStartProject(project)}>Começar</button>
              </div>
            ))
          ) : (
            <p>Nenhum projeto encontrado.</p>
          )}
        </div>
     
    </>
  );
}

export default StartProject;
