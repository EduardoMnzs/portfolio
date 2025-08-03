import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';
import ProjectModal from './ProjectModal';
import UniRecognition from '../assets/images/UniRecognition.jpg';
import MotionLab from '../assets/images/Motionlab.jpg';
import PandoraAI from '../assets/images/Pandora.jpg';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  // Projetos com mais detalhes
  const projects = [
    {
      id: 1,
      category: 'Desenvolvimento Web',
      title: 'Uni Recognition',
      description: 'Plataforma de reconhecimento facial em Python para identificar e registrar presença de alunos em tempo real.',
      tags: ['Flask', 'Python', 'PostgreSQL', 'OpenCV', 'NumPy'],
      image: UniRecognition,
      liveUrl: null,
      githubUrl: 'https://github.com/UniRecognition/UniRecognition',
      fullDescription: `UniRecognition é uma plataforma inteligente de reconhecimento facial desenvolvida para facilitar o controle de presença em ambientes educacionais. Utilizando tecnologia avançada de identificação facial em tempo real, a plataforma permite que instituições de ensino otimizem o processo de registro de presença de alunos de forma automatizada, segura e eficiente.

      A solução funciona da seguinte maneira: os usuários (alunos) realizam um cadastro inicial no sistema, onde suas imagens faciais são registradas e armazenadas de forma segura. A partir disso, por meio de uma câmera posicionada no ambiente (como uma sala de aula ou laboratório), o sistema realiza a leitura facial dos presentes, reconhecendo-os instantaneamente e registrando automaticamente sua presença na aula.

      Além de reduzir a burocracia e o tempo gasto com listas de chamada manuais, o UniRecognition também garante mais precisão nos registros, evita fraudes e contribui para um ambiente mais tecnológico e moderno, garantindo ganho de tempo e eficiência para os docentes e instituições de ensino.

      Seja para uso em universidades, escolas técnicas ou centros de treinamento, o UniRecognition representa um grande passo rumo à transformação digital na educação.`,
      highlights: [
        'Reconhecimento facial em tempo real',
        'Registro de presença de alunos',
        'Integração com sistema de turmas',
        'Interface amigável para cadastro e gerenciamento de turmas',
        'Sistema de autenticação de usuários'
      ]
    },
    {
      id: 2,
      category: 'Desenvolvimento Web',
      title: 'MotionLab',
      description: 'Plataforma de análise de marcha com sistemas embarcados e visão computacional',
      tags: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
      image: MotionLab,
      liveUrl: 'https://motionlab.gaek.com.br',
      githubUrl: 'https://github.com/MotionLab-Research',
      fullDescription: `MotionLab é uma plataforma de análise biomecânica da marcha desenvolvida para avaliar e monitorar o padrão de locomoção de indivíduos em reabilitação, especialmente aqueles que passaram por um acidente vascular cerebral (AVC). Através da integração entre sistemas embarcados, como sensores inerciais (MPU9250), e visão computacional, o MotionLab possibilita uma coleta precisa de dados sobre a marcha em diferentes tipos de superfícies, replicando cenários do dia a dia do paciente.

      A plataforma é capaz de capturar, processar e analisar variáveis biomecânicas em tempo real, fornecendo métricas detalhadas sobre o movimento corporal. Essas informações são visualizadas em um painel interativo que permite a profissionais da saúde (fisioterapeutas e pesquisadores) acompanhar a evolução funcional do paciente e adaptar os planos terapêuticos com base em dados objetivos.

      Com suporte a sensores vestíveis, algoritmos de segmentação de vídeo e processamento de sinais, o MotionLab oferece:
      - Registro e análise da marcha em superfícies planas e irregulares
      - Identificação de fases da marcha e eventos como apoio e oscilação
      - Detecção de assimetrias e alterações posturais características do pós-AVC
      - Exportação de relatórios e gráficos para acompanhamento clínico

      A solução foi desenvolvida com foco em acessibilidade e escalabilidade, podendo ser implementada em clínicas, centros de reabilitação ou instituições de pesquisa.`,
      highlights: [
        'Análise biomecânica da marcha em diferentes superfícies',
        'Reconhecimento de padrões de movimento com visão computacional',
        'Coleta de dados com sensores inerciais (sistemas embarcados)',
        'Interface de dashboard com gráficos e relatórios',
        'Foco em pacientes em reabilitação pós-AVC'
      ]
    },
    {
      id: 3,
      category: 'Mobile App',
      title: 'Pandora AI',
      description: 'A Pandora utiliza reconhecimento de voz para auxiliar no dia a dia, permitindo que os usuários recebam respostas em tempo real.',
      tags: ['React Native', 'Python', 'GeminiAPI', 'ElevenLabs', 'Expo'],
      image: PandoraAI,
      liveUrl: null,
      githubUrl: 'https://github.com/EduardoMnzs/Pandora-1.0',
      fullDescription: `Pandora AI é uma aplicação mobile desenvolvida para proporcionar uma experiência de assistente pessoal baseada em comandos de voz. Utilizando tecnologias de reconhecimento de fala e inteligência artificial, a plataforma permite que os usuários interajam por voz e recebam respostas em tempo real de maneira fluida e contextual.

      A aplicação identifica a fala do usuário, interpreta a mensagem utilizando modelos de linguagem como a GeminiAPI, e retorna respostas personalizadas por meio de síntese de voz (Text-to-Speech) com o apoio da ElevenLabs. Essa abordagem torna a Pandora especialmente útil em momentos em que a digitação não é prática — como ao dirigir, praticar atividades físicas ou realizar tarefas domésticas.

      Projetada com uma interface amigável, a aplicação oferece:
      - Reconhecimento preciso da fala mesmo em ambientes ruidosos
      - Integração com APIs modernas para entendimento e geração de linguagem natural
      - Feedback por voz com timbre natural e agradável
      - Possibilidade de personalização das interações e expansão para novos comandos

      Pandora AI representa uma solução prática, acessível e inteligente para quem busca um assistente de voz leve e eficiente no celular.`,
      highlights: [
        'Reconhecimento de voz para auxiliar no dia a dia',
        'Respostas em tempo real com uso de inteligência artificial',
        'Integração com GeminiAPI e ElevenLabs',
        'Interface mobile amigável e responsiva',
        'Assistente pessoal leve, intuitivo e personalizável'
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