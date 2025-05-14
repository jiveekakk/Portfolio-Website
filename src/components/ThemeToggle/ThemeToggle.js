import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // Play lightsaber sound on toggle
    const sound = new Audio('/assets/sounds/lightsaber-on.mp3');
    sound.volume = 0.3;
    sound.play();
  };

  return (
    <div className="theme-toggle-container">
      <button 
        onClick={toggleTheme}
        className={`theme-toggle ${theme}-theme`}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        <div className="toggle-handle"></div>
        <span className="star-wars-font">
          {theme === 'dark' ? 'Join the Light Side' : 'Embrace the Dark Side'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;