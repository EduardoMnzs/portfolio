import React, { useState, useEffect, useRef } from 'react';
import '../styles/Projects.css';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  
  // Projetos com mais detalhes
  const projects = [
    {
      id: 1,
      title: 'E-commerce App',
      description: 'Plataforma de comércio eletrônico completa com pagamentos, carrinho de compras e painel de administração.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'AWS'],
      image: 'https://via.placeholder.com/600x340/252540/3b82f6?text=E-commerce+App',
      link: '#',
      fullDescription: 'Uma plataforma de e-commerce completa desenvolvida com arquitetura moderna e escalável. Implementei um sistema de pagamentos seguro com Stripe, carrinho de compras persistente, autenticação de usuários, painel de administração para gerenciamento de produtos e pedidos, e integração com serviços de entrega.',
      highlights: [
        'Sistema de pagamento seguro com Stripe',
        'Painel administrativo com análise de vendas',
        'Otimização de performance com lazy loading e code splitting',
        'Implementação de PWA para experiência mobile aprimorada',
        'Integração com serviços de entrega e rastreamento'
      ]
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo com visualização de dados em tempo real, gráficos e relatórios personalizados.',
      tags: ['Vue.js', 'Express', 'D3.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      image: 'https://via.placeholder.com/600x340/252540/8b5cf6?text=Dashboard+Analytics',
      link: '#',
      fullDescription: 'Dashboard analítico interativo que processa e visualiza grandes volumes de dados em tempo real. Utilizei Vue.js para criar uma interface responsiva e dinâmica, D3.js para visualizações de dados complexas, Socket.io para atualizações em tempo real, e PostgreSQL para armazenamento eficiente de dados.',
      highlights: [
        'Visualizações de dados interativas e personalizáveis',
        'Atualizações em tempo real com WebSockets',
        'Sistema de exportação de relatórios em múltiplos formatos',
        'Arquitetura escalável com Docker e microserviços',
        'Implementação de filtros avançados e análise preditiva'
      ]
    },
    {
      id: 3,
      title: 'App de Finanças',
      description: 'Aplicativo para controle financeiro pessoal com categorização de gastos e visualização de tendências.',
      tags: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Expo', 'Cloud Functions'],
      image: 'https://via.placeholder.com/600x340/252540/06b6d4?text=App+de+Finanças',
      link: '#',
      fullDescription: 'Aplicativo mobile para controle financeiro pessoal desenvolvido com React Native e Firebase. Implementei funcionalidades como categorização automática de transações, visualização de tendências de gastos, definição de metas financeiras, notificações de orçamento e sincronização entre dispositivos.',
      highlights: [
        'Sincronização em tempo real entre dispositivos',
        'Categorização inteligente de transações',
        'Gráficos interativos para análise de gastos',
        'Sistema de metas financeiras com notificações',
        'Exportação de relatórios financeiros detalhados'
      ]
    }
  ];

  // Detectar quando a seção entra na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <h2 className={`projects-title ${isVisible ? 'animate-in' : ''}`}>
          <span className="text-gradient">Projetos</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <button 
                  className="button button-secondary project-button"
                  onClick={() => setSelectedProject(project)}
                >
                  Ver Projeto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;