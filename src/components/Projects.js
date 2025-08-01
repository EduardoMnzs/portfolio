import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
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
      category: 'Web Development',
      title: 'E-commerce App',
      description: 'Plataforma de comércio eletrônico completa com pagamentos, carrinho de compras e painel de administração.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'AWS'],
      image: 'https://via.placeholder.com/600x340/252540/3b82f6?text=E-commerce+App',
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/example/ecommerce',
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
      category: 'Data Analytics',
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo com visualização de dados em tempo real, gráficos e relatórios personalizados.',
      tags: ['Vue.js', 'Express', 'D3.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      image: 'https://via.placeholder.com/600x340/252540/8b5cf6?text=Dashboard+Analytics',
      liveUrl: 'https://example.com/dashboard',
      githubUrl: 'https://github.com/example/dashboard',
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
      category: 'Mobile App',
      title: 'App de Finanças',
      description: 'Aplicativo para controle financeiro pessoal com categorização de gastos e visualização de tendências.',
      tags: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Expo', 'Cloud Functions'],
      image: 'https://via.placeholder.com/600x340/252540/06b6d4?text=App+de+Finanças',
      liveUrl: 'https://example.com/finances',
      githubUrl: 'https://github.com/example/finances',
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <h2 className={`projects-title ${isVisible ? 'animate-in' : ''}`}>
          <span className="text-gradient">
            {'Projetos'.split('').map((char, index) => <span key={index} style={{ animationDelay: `${0.1 + index * 0.08}s` }}>{char}</span>)}
          </span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-card-header">
                  <span className="badge-category">{project.category}</span>
                  <div className="project-links">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><ExternalLink size={24} /></a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><Github size={24} /></a>}
                  </div>
                </div>
                <div className="project-overlay"></div>
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
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-view-more">
          <Link to="/projects" className="button button-primary">
            Ver Mais Projetos
          </Link>
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