import React from 'react'
import './Footer.css';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id='contato' className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h3>Vamos trabalhar juntos?</h3>
            <p>Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!</p>
          </div>

          <div className='footer-links'>
            <button onClick={() => scrollToSection('home')} className='footer-link'>Home</button>
            <button onClick={() => scrollToSection('sobre')} className='footer-link'>Sobre</button>
            <button onClick={() => scrollToSection('habilidades')} className='footer-link'>Habilidades</button>
          </div>

          <div className='footer-socials'>
            <a href='https://github.com/tinho1123' target='_blank' rel='noopener noreferrer' className='footer-social-link'>
              <i className='fab fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/wellingtoncarvalhodacunhafilho/' target='_blank' rel='noopener noreferrer' className='footer-social-link'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>&copy; 2026 Wellington Carvalho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
