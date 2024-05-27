import React, { useState, useEffect } from "react";
import { api } from "../../services/api";

function Projeto() {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projects, setProjects] = useState([]);
  const projectIds = [1, 2, 3, 4, 5, 6, 7, 8];

  // Carregar projetos da API quando o componente é montado
  const loadProjectsFromAPI = async () => {
    try {
      const projectRequests = projectIds.map((id) =>
        api.get(`/projects/${id}`)
      );
      const responses = await Promise.all(projectRequests);
      const projectsData = responses.map((response) => response.data);
      setProjects(projectsData);
    } catch (error) {
      console.error("Erro ao carregar projetos:", error);
      setProjects([]);
    }
  };

  useEffect(() => {
    loadProjectsFromAPI();
  }, []);

  const handleProjectClick = (projectId) => {
    window.location.href = `/projects/${projectId}/tasks`;
  };

  const handleNewProject = async () => {
    const projectData = {
      name: projectName,
      description: description,
      startDate: startDate,
      endDate: endDate,
    };

    try {
      const response = await api.post("/projects", projectData);
      const newProject = response.data;
      setProjects((prevProjects) => [...prevProjects, newProject]);
      setShowModal(false);
    } catch (error) {
      console.error("Erro ao tentar criar projeto:", error);
    }
  };

  return (
    <div className="projeto">
      {showModal && (
        <div className="modal">
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Nome do projeto"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Data de início"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="Data de final"
          />
          <button onClick={handleNewProject}>Criar Projeto</button>
        </div>
      )}
      <button className="btnProject" onClick={() => setShowModal(true)}>
        <span className="btnAddProject">+</span>
        Novo projeto
      </button>
      {Array.isArray(projects) && projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.id} onClick={() => handleProjectClick(project.id)}>
            {project.name}
          </div>
        ))
      ) : (
        <p>Nenhum projeto encontrado.</p>
      )}
    </div>
  );
}

export default Projeto;
