import React, { useState, useEffect } from "react";
import { api } from "../../services/api";


function Projeto() {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projects, setProjects] = useState([]);
  const userId = localStorage.getItem("userId");

  const loadUserProjects = async () => {
    try {
      const response = await api.get(`/users/${userId}/projects`);
      const userProjects = response.data.content;
      setProjects(userProjects);
      console.log(userProjects);
    } catch (error) {
      console.error("Erro ao carregar projetos do usuário:", error);
    }
  };

  useEffect(() => {
    loadUserProjects();
  }, []);

  const handleProjectClick = (projectId) => {
    window.location.href = `/projects/${projectId}/tasks`;
  };

  const createClassification = async (projectId) => {
    const classifications = [
      {
        title: "Nothing",
        projectId: projectId,
      }
    ];

    try {
      const classificationPromises = classifications.map(classification =>
        api.post(`/projects/${projectId}/classifications`, classification)
      );
      await Promise.all(classificationPromises);
      console.log("Classificações criadas com sucesso!", classificationPromises);
    } catch (error) {
      console.error("Erro ao criar classificações:", error);
    }
  };

  const handleNewProject = async () => {
    const projectData = {
      name: projectName,
      description: description,
      startDate: startDate,
      endDate: endDate,
      userId: localStorage.getItem("userId"),
    };

    try {
      const response = await api.post("/projects", projectData);
      const newProject = response.data;
      setProjects((prevProjects) => [...prevProjects, newProject]);
      setShowModal(false);

      await createClassification(newProject.id);
    } catch (error) {
      console.error("Erro ao tentar criar projeto:", error);
    }
  };

  return (
    <div className="projeto">
      <div className="spaceProject">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} onClick={() => handleProjectClick(project.id)} className="created-project-name">
              {project.name}
            </div>
          ))
        ) : (
          <p className="foundProject">Nenhum projeto encontrado.</p>
        )}
      </div>
      <button className="btnProject" onClick={() => setShowModal(true)}>
        <span>+</span> Novo projeto
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Criar Novo Projeto</h2>
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
        </div>
      )}
    </div>
  );
}

export default Projeto;
