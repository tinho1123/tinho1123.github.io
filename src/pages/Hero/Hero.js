import React from 'react'
import './Hero.css';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1 className='greeting'>Olá!</h1>
          <h2 className='title'>Sou Wellington Carvalho</h2>
          <p className='subtitle'>
            Desenvolvedor Full Stack Pleno | Soluções Web Modernas | React • Node.js • TypeScript
          </p>
          
          <div className='cta-buttons'>
            <button 
              onClick={() => scrollToSection('sobre')}
              className='btn btn-primary'
            >
              Conhecer Meu Trabalho
            </button>
            <a 
              href='https://github.com/tinho1123' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='btn btn-secondary'
            >
              Ver Repositórios
            </a>
          </div>

          <div className='social-links'>
            <a href='https://github.com/tinho1123' target='_blank' rel='noopener noreferrer' className='social-icon' title='GitHub'>
              <i className='fab fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/wellingtoncarvalhodacunhafilho/' target='_blank' rel='noopener noreferrer' className='social-icon' title='LinkedIn'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>

        <div className='hero-image'>
          <div className='floating-card card-1'>
            <p>⚛️ React</p>
          </div>
          <div className='floating-card card-2'>
            <p>🔧 Full Stack</p>
          </div>
          <div className='floating-card card-3'>
            <p>💡 Clean Code</p>
          </div>
        </div>
      </div>

      <div className='scroll-indicator'>
        <span>Explore ↓</span>
      </div>
    </section>
  )
}
