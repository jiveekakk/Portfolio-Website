import React from 'react';
import './Banner.css';
import StarWarsIntro from './StarWarsIntro';

const Banner = ({ theme }) => {
  return (
    <section id="home" className="banner-section">
      <StarWarsIntro theme={theme} />
      <div className="banner-content">
        <h1 className="star-wars-font">
          Hello, I'm <span className="name-highlight">Jiveeka</span>.
        </h1>
        <h2 className="star-wars-font">
          May the code be with you... always.
        </h2>
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll Down</span>
          <div className={`lightsaber ${theme}-saber`}></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;