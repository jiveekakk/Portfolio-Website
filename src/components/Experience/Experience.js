import React from 'react';
import './Experience.css';
import { experience } from '../../data/experience';

const Experience = ({ theme }) => {
  return (
    <section id="experience" className={`experience-section ${theme}-theme`}>
      <div className="experience-container">
        <h2 className="star-wars-font">My Jedi...I mean Software Developer journey</h2>
        <p className="section-subtitle">
          The path to becoming a full-fledged developer 
        </p>
        
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className={`timeline-content ${theme}-timeline`}>
                <div className="timeline-period">{exp.period}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;