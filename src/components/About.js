import React, { useState, useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'UI/UX Design', level: 75 },
  ];

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-background">
        <div className="about-gradient-1"></div>
        <div className="about-gradient-2"></div>
      </div>
      
      <div className="about-container">
        <h2 className={`about-title ${isVisible ? 'animate-in' : ''}`}>
          Sobre <span className="text-gradient">Mim</span>
        </h2>
        
        <div className="about-content-wrapper">
          <div className={`about-content ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <p>
              Olá! Sou um desenvolvedor de software apaixonado por criar soluções elegantes e eficientes.
              Tenho experiência em desenvolvimento web full-stack, com foco em tecnologias modernas como React, Node.js e muito mais.
            </p>
            <p>
              Estou sempre em busca de novos desafios e oportunidades para aprender e crescer.
              Minha abordagem combina criatividade com pensamento analítico para resolver problemas complexos.
            </p>
            
            <div className="about-card">
              <svg className="about-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
              <p className="about-highlight">
                "Acredito que o melhor código é aquele que resolve problemas reais de forma simples e elegante."
              </p>
            </div>
          </div>
          
          <div className={`about-skills ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
            <h3 className="skills-title">Minhas Habilidades</h3>
            
            {skills.map((skill, index) => (
              <div className="skill-item" key={index} style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${0.8 + index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;