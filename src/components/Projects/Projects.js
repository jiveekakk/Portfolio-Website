import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const Projects = ({ theme }) => {
  return (
    <section id="projects" className={`projects-section ${theme}-theme`}>
      <div className="projects-container">
        <h2 className="star-wars-font">My Rebel Projects</h2>
        <p className="section-subtitle">
          These are the droids (projects) you're looking for
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;