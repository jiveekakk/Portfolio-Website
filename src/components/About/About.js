import React from 'react';
import './About.css';
import OpeningCrawl from './OpeningCrawl';

const About = ({ theme }) => {
  return (
    <section id="about" className={`about-section ${theme}-theme`}>
      <div className="about-container">
        <OpeningCrawl theme={theme} />
        
        <div className="about-content">
          <h2 className="star-wars-font">About the Developer</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Like a young Jedi emerging from the academy, I've been honing my skills 
                in software development through my BSc in IT studies and real-world internship 
                experience.
              </p>
              <p>
                My journey in technology began when I first discovered programming, 
                much like Luke Skywalker discovering the Force. Since then, I've been 
                passionate about using code to solve problems and create innovative solutions.
              </p>
              <p>
                When I'm not coding, you can find me contributing to my personal projects, 
                learning new technologies, or (admittedly) rewatching the Star Wars saga.
              </p>
            </div>
            <div className="about-image">
              <div className={`jedi-profile ${theme}-profile`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;