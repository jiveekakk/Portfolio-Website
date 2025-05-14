import React from 'react';
import './Skills.css';
import SkillLevel from './SkillLevel';
import { skills } from '../../data/skills';

const Skills = ({ theme }) => {
  return (
    <section id="skills" className={`skills-section ${theme}-theme`}>
      <div className="skills-container">
        <h2 className="star-wars-font">My Jedi Skills</h2>
        <p className="section-subtitle">
          From Padawan to Jedi Knight - my progression in the coding arts
        </p>
        
        <div className="skills-levels">
          <SkillLevel 
            title="Jedi Apprentice (beginner)" 
            skills={skills.apprentice}
            theme={theme}
            level="apprentice"
          />
          <SkillLevel 
            title="Padawan (intermediate)" 
            skills={skills.padawan}
            theme={theme}
            level="padawan"
          />
          <SkillLevel 
            title="Jedi Knight ()" 
            skills={skills.knight}
            theme={theme}
            level="knight"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;