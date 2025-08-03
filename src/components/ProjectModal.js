import React, { useEffect, useRef } from 'react';
import '../styles/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const { technologies = [], highlights = [] } = project || {};
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  // Fechar o modal quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !contentRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    // Desabilitar o scroll do body quando o modal estiver aberto
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Animação de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.classList.add('show');
      }
      if (contentRef.current) {
        contentRef.current.classList.add('show');
      }
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  if (!project) return null;

  return (
    <div className="project-modal" ref={modalRef}>
      <div className="project-modal-content" ref={contentRef}>
        <button className="project-modal-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="project-modal-header">
          <img src={project.image} alt={project.title} className="project-modal-image" />
        </div>

        <div className="project-modal-body">
          <h2 className="project-modal-title">{project.title}</h2>
          
          <div className="project-modal-tags">
            {technologies.map((tag, i) => (
              <span key={i} className="project-modal-tag">{tag}</span>
            ))}
          </div>
          
          <div className="project-modal-description">
            <h3>Descrição</h3>
            <p>{project.fullDescription || project.description}</p>
          </div>
          
          <div className="project-modal-details">
            <h3>Tecnologias Utilizadas</h3>
            <ul className="project-modal-tech-list">
              {technologies.map((tech, i) => (
                <li key={i} className="project-modal-tech-item">
                  <span className="project-modal-tech-icon">•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
            <p className="project-modal-tech-description">
              Cada tecnologia foi escolhida estrategicamente para garantir a melhor performance, escalabilidade e experiência do usuário para este projeto específico.
            </p>
          </div>
          
          <div className="project-modal-summary">
            <h3>Resumo</h3>
            <p>
              Este projeto foi desenvolvido com foco em {technologies.join(', ')}. 
              Ele demonstra minhas habilidades em desenvolvimento de interfaces, 
              integração com APIs e implementação de funcionalidades complexas.
            </p>
          </div>
          
          <div className="project-modal-highlights">
            <h3>Destaques</h3>
            <ul>
              {highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-modal-footer">
          <a href={project.link} className="button button-primary project-modal-button" target="_blank" rel="noopener noreferrer">
            Ver Detalhes
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <div className="project-modal-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-modal-icon-link github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c-.59-.63-1.5-1.23-2.51-1.23A4.26 4.26 0 0 0 14 2.92c-.82-.04-1.64-.17-2.5-.17-1.01 0-1.92.6-2.51 1.23A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            )}
            {project.websiteLink && (
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="project-modal-icon-link website">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </a>
            )}
            {project.behanceLink && (
              <a href={project.behanceLink} target="_blank" rel="noopener noreferrer" className="project-modal-icon-link behance">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 12c0 2.21-1.79 4-4 4H8V8h4c2.21 0 4 1.79 4 4z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4V8h4c2.21 0 4 1.79 4 4s-1.79 4-4 4z"></path></svg>
              </a>
            )}
          </div>
          {project.link && (
            <a href={project.link} className="button button-primary project-modal-button" target="_blank" rel="noopener noreferrer">
              Ver Projeto
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;