import React, { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    // Animação de entrada dos elementos
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const background = backgroundRef.current;

    if (title && subtitle && button && background) {
      title.classList.add('animate-in');
      
      setTimeout(() => {
        subtitle.classList.add('animate-in');
      }, 300);
      
      setTimeout(() => {
        button.classList.add('animate-in');
      }, 600);

      setTimeout(() => {
        background.classList.add('animate-in');
      }, 100);
    }

    // Efeito de movimento do fundo com o mouse
    const handleMouseMove = (e) => {
      if (background) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        background.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      }
    };

    // Controle de visibilidade do indicador de scroll
    const handleScroll = () => {
      // Oculta o indicador no primeiro scroll
      if (window.scrollY > 0) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Chama uma vez para definir o estado inicial
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-background" ref={backgroundRef}>
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <span className="text-gradient">Eduardo Menezes</span>
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          Desenvolvedor <span className="text-gradient-purple">Full Stack</span>
        </p>
        <div className="hero-buttons" ref={buttonRef}>
          <a href="#projects" className="button button-primary hero-button">
            Ver Projetos
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
          <a href="#contact" className="button button-secondary hero-button-secondary">
            Contato
          </a>
        </div>
        
        {isHeroVisible && (
          <div className="hero-scroll-indicator" ref={scrollIndicatorRef}>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;