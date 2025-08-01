import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scroll para baixo
        setIsHeaderVisible(false);
      } else {
        // Scroll para cima
        setIsHeaderVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Alternar entre tema claro e escuro
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('light-theme');
  };

  // Alternar menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header glass ${isScrolled ? 'scrolled' : ''} ${isHeaderVisible ? '' : 'hidden'}`}>
      <div className="header-container">
        <a href="/" className="nav-logo">
          <span className="logo-text">EM</span>
        </a>

        {/* Menu para dispositivos móveis */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projetos</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contato</a></li>
          </ul>
          
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={isDarkTheme ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            {isDarkTheme ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;