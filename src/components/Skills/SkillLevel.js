import React from 'react';
import './Skills.css';

const SkillLevel = ({ title, skills, theme, level }) => {
  return (
    <div className={`skill-level ${level} ${theme}-level`}>
      <div className="level-header">
        <h3>{title}</h3>
        <div className={`level-icon ${theme}-icon`}></div>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-meter">
              <div 
                className={`skill-progress ${theme}-progress`} 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLevel;