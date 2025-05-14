import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Starfield from './components/Background/Starfield';



function App() {
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'

  return (
    <div className={`app ${theme}-theme`}>
      <Starfield />
      <div className="themed-background" />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Navbar theme={theme} />
      <Banner theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Experience theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;