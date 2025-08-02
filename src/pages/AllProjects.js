import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/AllProjects.css';
import ProjectModal from '../components/ProjectModal';

const projects = [
    { id: 1, category: "Web Development", title: "E-commerce App", description: "Plataforma de e-commerce completa com pagamentos, carrinho e painel de administração.", technologies: ["React", "Next.js", "TypeScript", "Prisma"], image: "https://via.placeholder.com/600x400/059669/f0fdfa?text=EcoCommerce", liveUrl: 'https://example.com/ecommerce', githubUrl: 'https://github.com/example/ecommerce', fullDescription: 'Uma plataforma de e-commerce completa desenvolvida com arquitetura moderna e escalável. Implementei um sistema de pagamentos seguro com Stripe, carrinho de compras persistente, autenticação de usuários, painel de administração para gerenciamento de produtos e pedidos, e integração com serviços de entrega.', highlights: ['Sistema de pagamento seguro com Stripe', 'Painel administrativo com análise de vendas', 'Otimização de performance com lazy loading e code splitting', 'Implementação de PWA para experiência mobile aprimorada', 'Integração com serviços de entrega e rastreamento'] },
    { id: 2, category: "Data Analytics", title: "CollabFlow", description: "Plataforma de gerenciamento de projetos com IA para equipes remotas.", technologies: ["React", "Node.js", "Socket.io", "MongoDB"], image: "https://via.placeholder.com/600x400/4f46e5/f0fdfa?text=CollabFlow", liveUrl: 'https://example.com/collabflow', githubUrl: 'https://github.com/example/collabflow', fullDescription: 'Plataforma de gerenciamento de projetos com IA para equipes remotas, otimizando a colaboração e produtividade. Implementei funcionalidades como chat em tempo real, compartilhamento de arquivos, gestão de tarefas e integração com ferramentas de IA para automação de fluxos de trabalho.', highlights: ['Chat em tempo real com Socket.io', 'Integração com IA para automação de tarefas', 'Gestão de projetos e tarefas personalizáveis', 'Colaboração em equipe e compartilhamento de arquivos', 'Notificações e lembretes inteligentes'] },
    { id: 3, category: "Mobile App", title: "WeatherWise", description: "App de previsão do tempo com machine learning e interface adaptativa.", technologies: ["React Native", "TypeScript", "Chart.js", "Expo"], image: "https://via.placeholder.com/600x400/0284c7/f0fdfa?text=WeatherWise", liveUrl: 'https://example.com/weatherwise', githubUrl: 'https://github.com/example/weatherwise', fullDescription: 'Aplicativo de previsão do tempo com machine learning para oferecer previsões precisas e personalizadas. A interface adaptativa se ajusta às preferências do usuário e às condições climáticas, proporcionando uma experiência intuitiva e rica em dados.', highlights: ['Previsões precisas com machine learning', 'Interface adaptativa e personalizável', 'Alertas de tempo severo em tempo real', 'Integração com APIs de geolocalização', 'Gráficos interativos de tendências climáticas'] },
    { id: 4, category: "Website", title: "DevPortfolio Pro", description: "Portfólio com CMS, animações 3D e modo escuro inteligente.", technologies: ["Next.js", "Three.js", "Framer Motion", "MDX"], image: "https://via.placeholder.com/600x400/7c3aed/f0fdfa?text=Portfolio+Pro", liveUrl: 'https://example.com/portfolio', githubUrl: 'https://github.com/example/portfolio', fullDescription: 'Sistema de portfólio profissional com CMS integrado para fácil atualização de conteúdo. Inclui animações 3D interativas, modo escuro inteligente que se ajusta automaticamente, e seção de blog para compartilhar conhecimentos técnicos.', highlights: ['CMS personalizado para fácil atualização', 'Animações 3D com Three.js', 'Modo escuro inteligente baseado em preferências', 'Seção de blog com suporte a MDX', 'Otimizado para SEO e performance'] },
    { id: 5, category: "Web App", title: "TechBlog Engine", description: "Engine de blog otimizada para conteúdo técnico com IA.", technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"], image: "https://via.placeholder.com/600x400/db2777/f0fdfa?text=TechBlog", liveUrl: 'https://example.com/techblog', githubUrl: 'https://github.com/example/techblog', fullDescription: 'Engine de blog otimizada para conteúdo técnico, com funcionalidades de IA para geração de rascunhos, otimização de SEO e categorização automática de artigos. Inclui um editor de markdown avançado e integração com Supabase para gerenciamento de dados.', highlights: ['Geração de conteúdo com IA', 'Otimização de SEO integrada', 'Editor de markdown avançado', 'Integração com Supabase para backend', 'Categorização automática de artigos'] },
    { id: 6, category: "Website", title: "SaaS Landing Optimizer", description: "Landing page inteligente que usa A/B testing para otimizar conversões.", technologies: ["React", "Framer Motion", "TensorFlow.js"], image: "https://via.placeholder.com/600x400/ea580c/f0fdfa?text=SaaS+Optimizer", liveUrl: 'https://example.com/saas-optimizer', githubUrl: 'https://github.com/example/saas-optimizer', fullDescription: 'Landing page inteligente projetada para otimizar taxas de conversão através de A/B testing contínuo e personalização dinâmica de conteúdo. Utiliza machine learning para identificar padrões de comportamento do usuário e adaptar a página em tempo real.', highlights: ['A/B testing integrado para otimização', 'Personalização dinâmica de conteúdo', 'Integração com TensorFlow.js para ML no navegador', 'Análise de dados em tempo real', 'Design responsivo e de alta conversão'] },
    { id: 7, category: "Web App", title: "CryptoTracker", description: "Dashboard em tempo real para monitoramento de criptomoedas.", technologies: ["Vue.js", "Node.js", "WebSockets", "Chart.js"], image: "https://via.placeholder.com/600x400/facc15/1e293b?text=CryptoTracker", liveUrl: 'https://example.com/cryptotracker', githubUrl: 'https://github.com/example/cryptotracker', fullDescription: 'Dashboard interativo para monitoramento em tempo real de criptomoedas. Utiliza WebSockets para atualizações instantâneas de preços e gráficos, permitindo aos usuários acompanhar suas carteiras e o mercado de forma eficiente.', highlights: ['Monitoramento em tempo real com WebSockets', 'Gráficos interativos de preços e volumes', 'Personalização de carteira e alertas', 'Integração com múltiplas exchanges', 'Análise de tendências de mercado'] },
];

const technologies = ["Todos", "React", "Next.js", "TypeScript", "Node.js", "Vue.js"];
const categories = ["Todos", "Web App", "Mobile App", "Website"];
const PROJECTS_PER_PAGE = 6;

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
    const [selectedTech, setSelectedTech] = useState("Todos");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentPage, setCurrentPage] = useState(1);
    const [isGridVisible, setIsGridVisible] = useState(false);
    const gridRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMouseMove);

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsGridVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        const currentGridRef = gridRef.current;
        if (currentGridRef) observer.observe(currentGridRef);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (currentGridRef) observer.unobserve(currentGridRef);
        };
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedTech, selectedCategory]);

    const filteredProjects = projects.filter(project =>
        (selectedTech === "Todos" || project.technologies.includes(selectedTech)) &&
        (selectedCategory === "Todos" || project.category === selectedCategory)
    );

    const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
    const currentProjects = filteredProjects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="projects-page">
            <div className="animated-background" style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` }} />
            
            <header className="projects-header">
                <div className="container">
                    <h1><span className="block">Transformando Ideias</span><span className="block text-gradient">em Realidade Digital</span></h1>
                    <p>Cada projeto é uma jornada de inovação e soluções criativas. Explore meu trabalho.</p>
                </div>
            </header>

            <main className="container">
                <section className="filters-section">
                    <h2>Explore Meus Projetos</h2>
                    <p>Filtre por tecnologia ou categoria para encontrar o que você procura.</p>
                    <div className="filters-controls">
                        <div className="dropdown"><button className="dropdown-button"><Filter size={16} /> Tecnologia: {selectedTech}</button><div className="dropdown-content">{technologies.map(tech => <button key={tech} onClick={() => setSelectedTech(tech)}>{tech}</button>)}</div></div>
                        <div className="dropdown"><button className="dropdown-button"><Filter size={16} /> Categoria: {selectedCategory}</button><div className="dropdown-content">{categories.map(cat => <button key={cat} onClick={() => setSelectedCategory(cat)}>{cat}</button>)}</div></div>
                    </div>
                </section>

                <div className="projects-grid" ref={gridRef}>
                    {currentProjects.map((project, index) => (
                        <div key={project.id} className={`project-card ${isGridVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${0.1 + index * 0.1}s` }} onMouseMove={e => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                        }}>
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-card-header">
                                    <span className="badge-category">{project.category}</span>
                                    <div className="project-links">
                                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><ExternalLink size={24} /></a>}
                                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><Github size={24} /></a>}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.technologies.map(tech => <span key={tech} className="project-tag">{tech}</span>)}
                                </div>
                                <button className="button button-secondary project-button" onClick={() => openModal(project)}>Ver Detalhes</button>
                            </div>
                        </div>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="pagination-container">
                        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="pagination-arrow"><ChevronLeft size={20} /></button>
                        {[...Array(totalPages).keys()].map(num => <button key={num + 1} onClick={() => paginate(num + 1)} className={`pagination-button ${currentPage === num + 1 ? 'active' : ''}`}>{num + 1}</button>)}
                        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-arrow"><ChevronRight size={20} /></button>
                    </div>
                )}

                {filteredProjects.length === 0 && (
                    <div className="no-projects-found">
                        <h3>Nenhum projeto encontrado</h3>
                        <p>Tente ajustar seus filtros para ver mais do meu trabalho.</p>
                        <button onClick={() => { setSelectedTech("Todos"); setSelectedCategory("Todos"); }}>Limpar Filtros</button>
                    </div>
                )}
            </main>
            {selectedProject && (
              <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </div>
  );
};

export default AllProjects;