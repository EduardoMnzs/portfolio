import React, { useEffect, useRef, useState } from 'react';
import Particles from './Particles';
import '../styles/Hero.css';
import TextType from './TextType';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const backgroundRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    // Animação de entrada dos elementos
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    const background = backgroundRef.current;

    if (title && subtitle && background) {
      title.classList.add('animate-in');

      setTimeout(() => {
        subtitle.classList.add('animate-in');
      }, 300);


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
    <section className="hero" id="home">
      <div className="hero-background" ref={backgroundRef}>
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
      </div>
      <Particles />

      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <TextType
            text={["Olá, eu sou Eduardo Menezes", "Bem-vindo(a) ao meu portfólio!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <br></br>
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          Desenvolvedor <span className="text-gradient-purple">Full Stack</span>
        </p>


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