import React from 'react';
import './Navbar.css';

const Navbar = ({ theme }) => {
  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'experience', name: 'Experience' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <nav className={`navbar ${theme}-theme`}>
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`} 
              className={`nav-link ${theme}-link`}
            >
              {section.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;