import React from 'react';
import './Projects.css';

const ProjectCard = ({ project, theme }) => {
  return (
    <div className={`project-card ${theme}-card`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className={`project-badge ${theme}-badge`}>
          {project.category}
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`project-link ${theme}-link`}
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`project-link ${theme}-link`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;