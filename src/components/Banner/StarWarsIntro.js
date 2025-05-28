import React from 'react';
import './Banner.css';

const StarWarsIntro = ({ theme }) => {
  return (
    <div className={`star-wars-intro ${theme}-theme`}>
      <div className="crawl">
        <div className="title">
          <h1 className="star-wars-font">Jiveeka Kuwar-Kanaye</h1>
          <h2 className="star-wars-font">A New Hope in Software Engineering</h2>
        </div>
        <div className="crawl-text">
          <p>
            It is a period of career transition. Rebel developer Jiveeka, 
            fresh from completing a Bachelor's in IT, has begun her journey 
            into the vast galaxy of software engineering.
          </p>
          <p>
            During her training, she demonstrated exceptional skills in 
            modern web technologies, contributing to the development of 
            innovative applications and systems.
          </p>
          <p>
            Now, seeking to join the ranks of elite developers, she presents 
            this portfolio as testament to her skills and passion for creating 
            innovative solutions...
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarWarsIntro;