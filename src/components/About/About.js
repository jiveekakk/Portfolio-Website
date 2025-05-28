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
              When I’m not buried in code or debugging the universe, I’m out leveling up in real life.
              Whether it's crushing personal records at the gym or chasing the bass drop at a rave or Festival is my playground.
              I’m a lifelong sports junkie with loyalty split between Manchester United and Real Madrid, 
              adrenaline-fueled F1 Sundays with Ferrari, and a soft spot for tennis legend Rafa Nadal (Wimbledon will never be the same 💔).
              </p>
              <p>
                But beyond the muscle and match days, I’m a massive geek at heart. Give me anything Marvel, Harry Potter,
                 or pure science fiction nonsense and I’ll lose hours happily nerding out. I live for the side quests,
                 finding hidden gems, vibing with new people, and unlocking experiences across my city. 
                 And yes, I do unreasonably drop too much cash on clothes, but call it character development.
                Catch me balancing grind and glow-up, one adventure (or outfit) at a time. 
                </p>
            </div>
            <div className="about-image">
               <img
                src="/assets/images/jiveeka.jpeg"
                alt="Developer Profile"
              className={`jedi-profile ${theme}-profile`}>
                </img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;