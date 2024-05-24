import React from "react"
import { useState } from "react"
import { api } from "../../services/api";
import ProjectContext from "./projectContext";
import { useEffect } from "react";

function Projeto () {
    const [showModal, setShowModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [projects, setProjects] = useState([]);
    
    
    // Função para salvar os projetos no localStorage
    const saveProjectsToLocalStorage = (projects) => {
      localStorage.setItem('projects', JSON.stringify(projects));
  };

  // Função para carregar os projetos do localStorage
  const loadProjectsFromLocalStorage = () => {
      const savedProjects = localStorage.getItem('projects');
      if (savedProjects) {
          setProjects(JSON.parse(savedProjects));
      }
  };

  useEffect(() => {
      loadProjectsFromLocalStorage();
  }, []);

  const handleProjectClick = (projectId) => {
    
    window.location.href = `/projects/${projectId}/tasks`
    console.log(projectId)
  };


    const handleNewProject = async () => {
   
    const projectData = {
        name: projectName,
        description: description,
        startDate: startDate,
        endDate: endDate
      };

      try {
        await api
        .post('/projects', {
            name: projectData.name,
            description: projectData.description,
            startDate: projectData.startDate,
            endDate: projectData.endDate
        },
      )
      
        .then((response) => {
          console.log(response.data);
          console.log('deu ceerto');
          const newProject = response.data;
            setProjects([...projects, newProject]);
          setProjects([...projects, response.data]); // Adiciona o novo projeto à lista de projetos
        setShowModal(false);
        saveProjectsToLocalStorage([...projects, newProject]);
          // window.location.href = '/tasks'; colocar isso só no componente que for criado, no caso o select
       
        });
      } catch (error) {
          console.error('Erro ao tentar criar projeto:', error);
          // Tratar o erro de acordo com as necessidades da sua aplicação
   

      };
  }

    return (
        <div className="projeto">
        <button className="btnProject" onClick={() => setShowModal(true)}>
            <span className="btnAddProject">
                +
            </span>

            Novo projeto

        </button>

        {showModal && (
        <div className="modal">
          <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Nome do projeto" />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Data de final" />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="Data de final" />

          <button onClick={handleNewProject}>Criar Projeto</button>
        </div>

        
      )}
       <ProjectContext.Provider value={handleProjectClick}>
       {projects.map((project, index) => (
          <div key={index} onClick={() => handleProjectClick(project.id)}>
            {project.name}
          </div>
        ))}
      </ProjectContext.Provider>
      {/* <select>
        <option value="">Selecione um projeto</option>
        {projects.map((project, index) => (
          <option key={index} value={project.name}>
            {project.name}
          </option>
        ))}
      </select> */}
      
    </div>
    )
}

export default Projeto