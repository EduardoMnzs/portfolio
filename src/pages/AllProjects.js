import React, { useState, useEffect, useRef } from 'react';
import { Filter, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/AllProjects.css';

// --- Dados dos Projetos (simplificados) ---
const projects = [
    { id: 1, title: "EcoCommerce Dashboard", subtitle: "Plataforma Sustentável de E-commerce", image: "https://via.placeholder.com/600x400/059669/f0fdfa?text=EcoCommerce", technologies: ["React", "Next.js", "TypeScript", "Prisma"], category: "Web App", githubUrl: "#", liveUrl: "#", color: "from-emerald-500 to-teal-600" },
    { id: 2, title: "CollabFlow", subtitle: "Gestão de Projetos Inteligente", image: "https://via.placeholder.com/600x400/4f46e5/f0fdfa?text=CollabFlow", technologies: ["React", "Node.js", "Socket.io", "MongoDB"], category: "Web App", githubUrl: "#", liveUrl: "#", color: "from-indigo-500 to-purple-600" },
    { id: 3, title: "WeatherWise", subtitle: "Previsão Meteorológica Inteligente", image: "https://via.placeholder.com/600x400/0284c7/f0fdfa?text=WeatherWise", technologies: ["React Native", "TypeScript", "Chart.js", "Expo"], category: "Mobile App", githubUrl: "#", liveUrl: "#", color: "from-sky-600 to-cyan-500" },
    { id: 4, title: "DevPortfolio Pro", subtitle: "Portfólio Interativo de Nova Geração", image: "https://via.placeholder.com/600x400/7c3aed/f0fdfa?text=Portfolio+Pro", technologies: ["Next.js", "Three.js", "Framer Motion", "MDX"], category: "Website", githubUrl: "#", liveUrl: "#", color: "from-purple-600 to-violet-500" },
    { id: 5, title: "TechBlog Engine", subtitle: "Plataforma de Conteúdo para Devs", image: "https://via.placeholder.com/600x400/db2777/f0fdfa?text=TechBlog", technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"], category: "Web App", githubUrl: "#", liveUrl: "#", color: "from-pink-500 to-rose-500" },
    { id: 6, title: "SaaS Landing Optimizer", subtitle: "Landing Page com IA de Conversão", image: "https://via.placeholder.com/600x400/ea580c/f0fdfa?text=SaaS+Optimizer", technologies: ["React", "Framer Motion", "Tailwind CSS", "TensorFlow.js"], category: "Website", githubUrl: "#", liveUrl: "#", color: "from-orange-500 to-red-500" },
    { id: 7, title: "CryptoTracker", subtitle: "Dashboard de Criptomoedas", image: "https://via.placeholder.com/600x400/facc15/1e293b?text=CryptoTracker", technologies: ["Vue.js", "Node.js", "WebSockets", "Chart.js"], category: "Web App", githubUrl: "#", liveUrl: "#", color: "from-yellow-400 to-amber-500" },
];

const technologies = ["Todos", "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "Three.js", "TensorFlow.js", "Vue.js"];
const categories = ["Todos", "Web App", "Mobile App", "Website"];

const PROJECTS_PER_PAGE = 6;

const AllProjects = () => {
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

  const filteredProjects = projects.filter((project) => {
    const techMatch = selectedTech === "Todos" || project.technologies.includes(selectedTech);
    const categoryMatch = selectedCategory === "Todos" || project.category === selectedCategory;
    return techMatch && categoryMatch;
  });

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    gridRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="projects-page">
      <div className="animated-background" style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` }} />
      
      <header className="projects-header">
        <div className="container">
          <h1><span className="block">Transformando Ideias</span><span className="block text-gradient">em Realidade Digital</span></h1>
          <p>Cada projeto é uma jornada de inovação, desafios superados e soluções criativas. Explore meu trabalho.</p>
        </div>
      </header>

      <main className="container">
        <div className="filters-section">
          <h2>Explore Meus Projetos</h2>
          <p>Filtre por tecnologia ou categoria para encontrar o que você procura.</p>
          <div className="filters-controls">
            <div className="dropdown"><button className="dropdown-button"><Filter size={16} /> Tecnologia: {selectedTech}</button><div className="dropdown-content">{technologies.map((tech) => (<a key={tech} href="#" onClick={(e) => {e.preventDefault(); setSelectedTech(tech);}}>{tech}</a>))}</div></div>
            <div className="dropdown"><button className="dropdown-button"><Filter size={16} /> Categoria: {selectedCategory}</button><div className="dropdown-content">{categories.map((cat) => (<a key={cat} href="#" onClick={(e) => {e.preventDefault(); setSelectedCategory(cat);}}>{cat}</a>))}</div></div>
          </div>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {currentProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isGridVisible ? 'animate-in' : ''}`} 
              style={{ 'animationDelay': `${0.1 + index * 0.05}s`}}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay" />
                <div className="project-card-header">
                  <span className="badge-category">{project.category}</span>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label="Ver projeto ao vivo"><ExternalLink size={18} /></a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label="Ver código no Github"><Github size={18} /></a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-tags">
                  {project.technologies.map((tech) => <span key={tech} className="tag">{tech}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination-container">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="pagination-arrow"><ChevronLeft size={20} /></button>
            {[...Array(totalPages).keys()].map(number => (
              <button key={number + 1} onClick={() => paginate(number + 1)} className={`pagination-button ${currentPage === number + 1 ? 'active' : ''}`}>{number + 1}</button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-arrow"><ChevronRight size={20} /></button>
          </div>
        )}

        {filteredProjects.length === 0 && (<div className="no-projects-found"><h3>Nenhum projeto encontrado</h3><p>Tente ajustar seus filtros para ver mais do meu trabalho.</p><button onClick={() => { setSelectedTech("Todos"); setSelectedCategory("Todos"); }}>Limpar Filtros</button></div>)}
      </main>
    </div>
  );
};

export default AllProjects;