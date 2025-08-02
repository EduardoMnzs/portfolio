import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-text">EM</span>
          <p className="footer-tagline">Desenvolvedor Frontend</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href='#technologies'>Tecnologias</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="https://github.com/eduardomnzs" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c0 0-1.03-.31-3.4 1.35A19.77 19.77 0 0 0 12 5.31c-2.76 0-5.24-.7-7-2.34C3.09 3 2 3.31 2 3.31A5.07 5.07 0 0 0 2.09 4.77A5.44 5.44 0 0 0 4 9.14c0 5.44 3.3 6.61 6.44 7A3.37 3.37 0 0 0 11 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/edu.mnzs_/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/edumnzs" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Eduardo Menezes. Todos os direitos reservados.</p>
        <div className="footer-bottom-links">
          <button type="button" className="footer-bottom-link">Política de Privacidade</button>
          <span className="divider">|</span>
          <button type="button" className="footer-bottom-link">Termos de Uso</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;