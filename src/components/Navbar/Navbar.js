import React, { useState } from 'react'
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo-section'>
          <button 
            className='navbar-logo' 
            onClick={() => scrollToSection('home')}
          >
            WC <span className='dot'>.</span>
          </button>
          <div className='navbar-socials'>
            <a 
              href='https://github.com/tinho1123' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='navbar-social-link'
              title='GitHub'
            >
              <i className='fab fa-github'></i>
            </a>
            <a 
              href='https://www.linkedin.com/in/wellingtoncarvalhodacunhafilho/' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='navbar-social-link'
              title='LinkedIn'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className='navbar-item'>
            <button 
              className='navbar-link' 
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li className='navbar-item'>
            <button 
              className='navbar-link' 
              onClick={() => scrollToSection('sobre')}
            >
              Sobre
            </button>
          </li>
          <li className='navbar-item'>
            <button 
              className='navbar-link' 
              onClick={() => scrollToSection('habilidades')}
            >
              Habilidades
            </button>
          </li>
          <li className='navbar-item'>
            <button 
              className='navbar-link' 
              onClick={() => scrollToSection('contato')}
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
