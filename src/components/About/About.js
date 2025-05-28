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
                 Much like a young Padawan emerging from the Jedi Temple, I’ve been sharpening my skills in software development 
                 through my BSc in IT studies and hands-on internship experiences.
                  My training has equipped me with the foundational knowledge and real-world exposure to navigate the galaxy of modern tech.
              </p>
              <p>
                My journey into the world of technology began with a spark—my first line of code.
                 It was as if I had just discovered my connection to the Force. 
                 Since then, I've been driven by a passion to use technology not just as a tool,
                  but as a way to bring balance—solving real problems with creative and impactful solutions.
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