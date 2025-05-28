import React, { useEffect, useRef } from 'react';
import './About.css';

const OpeningCrawl = ({ theme }) => {
  const crawlRef = useRef(null);

  useEffect(() => {
    // Start the crawl animation when component mounts
    if (crawlRef.current) {
      crawlRef.current.style.animation = 'starWarsCrawl 60s linear';
    }
  }, []);

  return (
    <div className="crawl-container">
      <div ref={crawlRef} className="crawl">
        <div className="title">
          <h1 className="star-wars-font">Episode I</h1>
          <h2 className="star-wars-font">A NEW DEVELOPER HOPE</h2>
        </div>
        <div className="crawl-text">
          <p>
            A long time ago in a small corner of the digital galaxy, a curious young learner named Jiveeka discovered her first terminal window.
            What began as a simple print statement soon grew into a full-blown adventure—one that would lead her across
            languages, frameworks, and galaxies of thought.
          </p>
          <p>
            But Jiveeka's path wasn’t forged by code alone. 
            From the very beginning, she believed in building with purpose.
            Whether crafting intuitive user experiences or writing clean, maintainable code,
            her work has always been guided by core values: clarity, empathy, continuous learning, and innovation.
            Like a true Jedi, she balances precision with passion—never settling for the quick fix when the elegant solution awaits.
          </p>
          <p>
            Now, with her lightsaber—er, keyboard—by her side,
            Jiveeka sets her sights on new adventures.
            Her aspiration? To join a guild of forward-thinking developers, 
            contribute to meaningful projects, and keep exploring the galaxy of modern technology—from front-end 
            constellations to back-end black holes, from AI systems to accessibility features that reach every user.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningCrawl;