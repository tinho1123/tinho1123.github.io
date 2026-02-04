import React, { useState } from 'react'
import './Skills.css'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillsData = {
    frontend: {
      title: 'Frontend Development',
      icon: '⚛️',
      skills: [
        { name: 'React', level: 95, description: 'Hooks, Context API, Performance Optimization' },
        { name: 'TypeScript', level: 90, description: 'Type Safety, Interfaces, Advanced Patterns' },
        { name: 'CSS/SCSS', level: 92, description: 'Responsive Design, Animations, Flexbox/Grid' },
        { name: 'JavaScript ES6+', level: 94, description: 'Modern JS, Async/Await, Promises' },
        { name: 'HTML5', level: 93, description: 'Semantic HTML, Accessibility, SEO' },
        { name: 'State Management', level: 88, description: 'Redux, Zustand, Context API' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '🔧',
      skills: [
        { name: 'Node.js', level: 92, description: 'Event-driven, Non-blocking I/O' },
        { name: 'Express.js', level: 91, description: 'Middleware, Routing, REST APIs' },
        { name: 'REST APIs', level: 93, description: 'RESTful Design, Status Codes, Best Practices' },
        { name: 'PostgreSQL', level: 88, description: 'SQL, Queries, Database Design' },
        { name: 'MongoDB', level: 87, description: 'NoSQL, Collections, Aggregation' },
        { name: 'Authentication', level: 89, description: 'JWT, OAuth, Session Management' }
      ]
    },
    tools: {
      title: 'Ferramentas & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 94, description: 'Version Control, Collaboration, CI/CD' },
        { name: 'Docker', level: 86, description: 'Containerization, Docker Compose' },
        { name: 'VS Code', level: 95, description: 'Extensions, Debugging, Productivity' },
        { name: 'Postman', level: 90, description: 'API Testing, Collections, Automation' },
        { name: 'Figma', level: 82, description: 'UI/UX, Design Systems, Prototyping' },
        { name: 'Linux/Bash', level: 85, description: 'Command Line, Shell Scripting' }
      ]
    }
  };

  const stats = [
    { label: 'Projetos Completados', value: '50+' },
    { label: 'Anos de Experiência', value: '5+' },
    { label: 'Clientes Satisfeitos', value: '30+' },
    { label: 'Repositórios GitHub', value: '52' }
  ];

  return (
    <section id='habilidades' className='skills'>
      <div className='container'>
        <h1>Habilidades & Qualificações</h1>

        {/* Stats Section */}
        <section className='stats-section'>
          <div className='stats-grid'>
            {stats.map((stat, idx) => (
              <div key={idx} className='stat-card'>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Tabs */}
        <section className='skills-tabs-section'>
          <div className='tabs-header'>
            {Object.entries(skillsData).map(([key, data]) => (
              <button
                key={key}
                className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <span className='tab-icon'>{data.icon}</span>
                {data.title}
              </button>
            ))}
          </div>

          <div className='tab-content'>
            {Object.entries(skillsData).map(([key, data]) => (
              <div
                key={key}
                className={`tab-pane ${activeTab === key ? 'active' : ''}`}
              >
                <div className='skills-list'>
                  {data.skills.map((skill, idx) => (
                    <div key={idx} className='skill-item'>
                      <div className='skill-header'>
                        <h4>{skill.name}</h4>
                        <span className='skill-level'>{skill.level}%</span>
                      </div>
                      <p className='skill-description'>{skill.description}</p>
                      <div className='skill-bar'>
                        <div
                          className='skill-progress'
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className='additional-info'>
          <div className='info-card'>
            <h3>🎓 Educação Contínua</h3>
            <p>Sempre em busca de aprender novas tecnologias e melhorar minhas habilidades através de cursos, documentação e projetos pessoais.</p>
          </div>
          <div className='info-card'>
            <h3>🚀 Liderança Técnica</h3>
            <p>Experiência como líder técnico na CDC Bank, orientando times, revisando código e implementando melhores práticas.</p>
          </div>
          <div className='info-card'>
            <h3>💡 Problem Solving</h3>
            <p>Especialista em resolver problemas complexos com soluções criativas e eficientes, mantendo foco em performance.</p>
          </div>
        </section>
      </div>
    </section>
  )
}
