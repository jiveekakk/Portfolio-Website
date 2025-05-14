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
          <h1 className="star-wars-font">Episode IV</h1>
          <h2 className="star-wars-font">A NEW DEVELOPER HOPE</h2>
        </div>
        <div className="crawl-text">
          <p>
            It is a period of career transition. Rebel developer Jiveeka, 
            fresh from completing a Bachelor's in IT, has begun her journey 
            into the vast galaxy of software engineering.
          </p>
          <p>
            During her internship, she demonstrated exceptional skills in 
            modern web technologies, contributing to the development of 
            innovative applications and systems.
          </p>
          <p>
            Now, seeking to join the ranks of elite developers, she presents 
            this portfolio as testament to her skills and passion for creating 
            solutions that make a difference in the digital universe...
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningCrawl;