import React, { useEffect, useRef } from 'react';
import '../styles/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
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
            {project.tags.map((tag, i) => (
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
              {project.tags.map((tech, i) => (
                <li key={i} className="project-modal-tech-item">
                  <span className="project-modal-tech-icon">•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
            <p className="project-modal-tech-description">
              Cada tecnologia foi escolhida estrategicamente para garantir a melhor performance, 
              escalabilidade e experiência do usuário para este projeto específico.
            </p>
          </div>
          
          <div className="project-modal-summary">
            <h3>Resumo</h3>
            <p>
              Este projeto foi desenvolvido com foco em {project.tags.join(', ')}. 
              Ele demonstra minhas habilidades em desenvolvimento de interfaces, 
              integração com APIs e implementação de funcionalidades complexas.
            </p>
          </div>
          
          <div className="project-modal-highlights">
            <h3>Destaques</h3>
            <ul>
              {project.highlights ? (
                project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))
              ) : (
                <>
                  <li>Interface responsiva e intuitiva</li>
                  <li>Otimização de performance</li>
                  <li>Código limpo e bem estruturado</li>
                  <li>Implementação de boas práticas de desenvolvimento</li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="project-modal-footer">
          <a href={project.link} className="button button-primary project-modal-button" target="_blank" rel="noopener noreferrer">
            Ver Projeto
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;