import React from 'react'
import './About.css'

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'CSS3', 'HTML5', 'JavaScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Banco de Dados', 'APIs REST', 'PostgreSQL'] },
    { category: 'Ferramentas', items: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman'] }
  ];

  const experience = [
    {
      title: 'Desenvolvedor Full Stack Pleno',
      company: 'CDC Bank',
      type: 'Líder Técnico',
      description: 'Desenvolvimento e liderança de projetos web modernos utilizando as melhores práticas de código limpo e arquitetura escalável.'
    },
    {
      title: 'Desenvolvedor Full Stack',
      description: 'Experiência sólida em projetos web com React, Node.js, Express e bancos de dados relacionais e não-relacionais.'
    }
  ];

  return (
    <section id='sobre' className='about'>
      <div className='container'>
        <h1>Sobre Mim</h1>
        <div className='intro-content'>
          <div className='intro-text'>
            <p>
              Olá! 👋 Sou Wellington Carvalho, desenvolvedor Full Stack Pleno apaixonado por tecnologia e soluções inovadoras. 
            </p>
            <p>
              Com experiência sólida em desenvolvimento web, trabalho com tecnologias modernas como <strong>React</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong> e diversos bancos de dados.
            </p>
            <p>
              Meu foco é criar soluções de qualidade, mantendo boas práticas de código limpo, escalabilidade e performance. Sou líder técnico na CDC Bank e sempre busco novos desafios que me façam evoluir como profissional.
            </p>
          </div>
        </div>

        <section className='experience-section'>
          <h2>Experiência Profissional</h2>
          <div className='experience-grid'>
            {experience.map((exp, idx) => (
              <div key={idx} className='experience-card'>
                <h3>{exp.title}</h3>
                {exp.company && <p className='company'>{exp.company} - {exp.type}</p>}
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='quick-skills'>
          <h2>Principais Habilidades</h2>
          <div className='skills-grid'>
            {skills.map((skillGroup, idx) => (
              <div key={idx} className='skill-category'>
                <h3>{skillGroup.category}</h3>
                <div className='skill-items'>
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className='skill-tag'>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
