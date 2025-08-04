import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/AllProjects.css';
import ProjectModal from '../components/ProjectModal';
import UniRecognition from '../assets/images/UniRecognition.jpg';
import MotionLab from '../assets/images/Motionlab.jpg';
import PandoraAI from '../assets/images/Pandora.jpg';
import LaserKiller from '../assets/images/LaserKiller.jpg';
import LoginPageInterfocus from '../assets/images/LoginPageInterfocus.jpg';
import CalculadoraML from '../assets/images/CalculadoraML.jpg';
import PivetaSystem from '../assets/images/PivetaSystem.jpg';
import BotBroadcast from '../assets/images/BotBroadcast.jpg';
import CodeExperience from '../assets/images/CodeExperience.jpg';
import PivetaTreinamentos from '../assets/images/PivetaTreinamentos.jpg';
import UniLife from '../assets/images/UniLife.jpg';

// --- DADOS E CONSTANTES ---

const projects = [
    {
        id: 1,
        category: 'Desenvolvimento Web',
        title: 'Uni Recognition',
        description: 'Plataforma de reconhecimento facial em Python para identificar e registrar presença de alunos em tempo real.',
        technologies: ['Flask', 'Python', 'PostgreSQL', 'OpenCV', 'NumPy'],
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
        technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
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
        technologies: ['React Native', 'Python', 'GeminiAPI', 'ElevenLabs', 'Expo'],
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
    },
    {
        id: 4,
        category: 'Sistemas Embarcados',
        title: 'Laser Killer',
        description: 'Sistema com ESP32-CAM que utiliza IA para identificar ervas daninhas e acionar um mecanismo de resposta.',
        technologies: ['ESP32-CAM', 'Python', 'OpenCV', 'Flask', 'IoT'],
        image: LaserKiller,
        liveUrl: null,
        githubUrl: 'https://github.com/Kauefranca/LaserKiller',
        fullDescription: `O Laser Killer é um sistema inteligente embarcado desenvolvido com o microcontrolador ESP32-CAM, projetado para atuar no controle de ervas daninhas de forma automatizada. Utilizando uma rede neural leve, o dispositivo é capaz de capturar imagens do solo, identificar em tempo real a presença de ervas daninhas e acionar um mecanismo — como um laser, LED ou outro atuador — para responder à detecção.

        A câmera integrada ao ESP32-CAM transmite imagens para o modelo embarcado, que realiza a inferência diretamente no dispositivo, sem necessidade de conexão com servidores externos. Isso garante eficiência, baixo consumo de energia e independência da internet, tornando o sistema ideal para uso em ambientes rurais e plantações remotas.

        O projeto une conceitos de visão computacional, aprendizado de máquina e IoT em um único dispositivo portátil e acessível. Com potencial para expansão, o sistema pode ser integrado a drones, robôs agrícolas ou veículos autônomos.

        Principais recursos:
        - Detecção em tempo real de ervas daninhas com IA embarcada
        - Processamento local via ESP32-CAM
        - Acionamento automático de mecanismo de resposta (ex: laser)
        - Projeto de baixo custo e fácil implementação
        - Potencial de uso em automação agrícola e robótica`,
        highlights: [
            'Identificação de ervas daninhas com IA embarcada',
            'Processamento de imagem local no ESP32-CAM',
            'Resposta automatizada com laser ou atuadores',
            'Sistema eficiente e de baixo custo',
            'Aplicação prática em automação agrícola'
        ]
    },
    {
        id: 5,
        category: 'Desenvolvimento Web',
        title: 'Login Page c/ Sessão Exclusiva',
        description: 'Sistema de login que gerencia sessões de usuário únicas, derrubando acessos anteriores ao novo login.',
        technologies: ['React', 'Node.js', 'Express', 'JWT', 'PostgreSQL', 'Session Management'],
        image: LoginPageInterfocus,
        liveUrl: 'https://interfocus.labs.unimar.br/',
        githubUrl: 'https://github.com/Kauefranca/FPAG04',
        fullDescription: `Esta Login Page foi desenvolvida para a Interfocus como parte de uma solução corporativa aplicada em ambiente de fábrica de projetos. A principal funcionalidade da aplicação é o controle rigoroso de sessões: ao autenticar um usuário, o sistema encerra automaticamente qualquer sessão ativa anterior vinculada àquele mesmo login.

        Utilizando backend em Node.js com Express, banco de dados PostgreSQL e autenticação baseada em tokens JWT, o sistema garante que apenas uma sessão por usuário esteja ativa a qualquer momento. Isso é essencial em contextos industriais e corporativos onde o controle de acesso é crítico — como no caso de ambientes compartilhados em fábricas, centros de monitoramento ou sistemas administrativos.

        O design da aplicação é simples e direto, com foco na segurança e estabilidade das sessões, garantindo que os usuários tenham acesso contínuo e exclusivo, e que não ocorra sobreposição de sessões acidentais ou indevidas.

        A estrutura é escalável e pode ser integrada com APIs RESTful, camadas de autenticação mais avançadas (como MFA) e sistemas de auditoria para rastreamento de acessos.`,

        highlights: [
            'Sessão exclusiva: um login derruba o anterior',
            'Controle de sessão com JWT e PostgreSQL',
            'Aplicação segura e estável para ambientes corporativos',
            'Desenvolvido para uso interno na Interfocus',
            'Preparado para expansão com MFA ou auditoria'
        ]
    },
    {
        id: 6,
        category: 'Mobile App',
        title: 'Calculadora de Margem Mercado Livre',
        description: 'Aplicativo mobile para calcular margens de lucro em vendas no Mercado Livre.',
        technologies: ['React Native', 'Expo', 'JavaScript', 'UX/UI', 'Finanças'],
        image: CalculadoraML,
        liveUrl: null,
        githubUrl: 'https://github.com/InvPiveta/calculadora-piveta',
        fullDescription: `A Calculadora de Margem Mercado Livre é um aplicativo mobile desenvolvido com React Native que permite aos vendedores calcularem de forma precisa suas margens de lucro considerando as taxas e comissões cobradas pela plataforma.

        O app foi criado para simplificar o processo de precificação de produtos, especialmente para pequenos e médios empreendedores que vendem no Mercado Livre e desejam manter a saúde financeira do negócio. Com uma interface intuitiva, o usuário informa o valor de venda, o custo do produto e o tipo de anúncio (Clássico ou Premium), e o app retorna automaticamente o valor líquido estimado e a margem de lucro.

        A lógica de cálculo considera as regras atualizadas da plataforma, como percentuais de comissão e descontos conforme a categoria do produto e tipo de anúncio.

        Além disso, o aplicativo permite:
        - Simular diferentes cenários de precificação
        - Visualizar o impacto das taxas nas margens
        - Ajustar estratégias de venda com base nos resultados calculados

        Com visual moderno e fácil de usar, a calculadora é uma ferramenta essencial para vendedores que desejam tomar decisões estratégicas com base em dados.`,

        highlights: [
            'Cálculo automático da margem de lucro no Mercado Livre',
            'Interface simples e responsiva para dispositivos móveis',
            'Simulação de diferentes tipos de anúncio (Clássico/Premium)',
            'Auxílio na tomada de decisões financeiras',
            'Totalmente desenvolvido em React Native com Expo'
        ]
    },
    {
        id: 7,
        category: 'Desenvolvimento Web',
        title: 'Piveta System',
        description: 'Sistema completo para gestão interna de vendas com chatbot, rastreio, integração Mercado Livre e bipagem de envio.',
        technologies: ['Python', 'Flask', 'PostgreSQL', 'Chatbot', 'Mercado Livre API', 'Automação'],
        image: PivetaSystem,
        liveUrl: null,
        githubUrl: 'https://github.com/EduardoMnzs/Tracking-piveta',
        fullDescription: `O Piveta System é um sistema completo de gerenciamento interno criado para automatizar processos logísticos e operacionais de pequenos e médios e-commerces que atuam principalmente no Mercado Livre.

        A plataforma reúne diversas funcionalidades integradas em um único ambiente:
        - Chatbot interno para comunicação e auxílio em perguntas técnicas de usinagem
        - Rastreamento de encomendas em tempo real com integração via APIs de transporte
        - Resposta automática a perguntas de compradores utilizando a API oficial do Mercado Livre
        - Bipagem de caixas de envio por meio de leitura de códigos de barras/QR Code, permitindo controle rigoroso de pedidos prontos para expedição

        Desenvolvido com backend em Python, Flask e banco de dados PostgreSQL, o sistema é modular, escalável e preparado para integrar novos marketplaces no futuro.

        O Piveta System melhora a eficiência da operação e reduz erros manuais, trazendo controle total para quem vende em larga escala e precisa de uma central automatizada.`,

        highlights: [
            'Chatbot interno para execução de comandos e suporte',
            'Rastreamento automatizado de encomendas',
            'Integração com API do Mercado Livre para responder perguntas automaticamente',
            'Bipagem de caixas com controle de expedição'
        ]
    },
    {
        id: 8,
        category: 'Automação',
        title: 'Bot de Broadcast Automático',
        description: 'Ferramenta automatizada para envio agendado de mensagens em massa com textos e imagens.',
        technologies: ['Python', 'Selenium', 'Tkinter', 'Automação', 'Agendamento'],
        image: BotBroadcast,
        liveUrl: null,
        githubUrl: 'https://github.com/EduardoMnzs/BrodFast-Image-V1.0',
        fullDescription: `O Bot de Broadcast Automático é uma ferramenta desenvolvida em Python para automatizar o envio de mensagens de texto e imagens em massa via plataformas web (como Chat Pion), utilizando agendamentos personalizados.

        Combinando a automação do Selenium com uma interface gráfica intuitiva construída em Tkinter, o bot permite ao usuário:
        - Definir mensagens personalizadas com ou sem mídia (imagens)
        - Selecionar contatos de envio
        - Agendar o horário exato para o disparo das mensagens
        - Acompanhar o processo de execução diretamente na interface

        A principal aplicação do bot é para comunicação em larga escala, como atualizações de campanhas, avisos empresariais ou ações promocionais. Ele simula o comportamento humano no navegador, evitando bloqueios e entregando mensagens de forma eficiente e segura.`,

        highlights: [
            'Envio automático de mensagens com texto e imagem',
            'Agendamento personalizado por data e hora',
            'Interface gráfica simples com Tkinter',
            'Automação via navegador com Selenium',
            'Ideal para comunicação em larga escala'
        ]
    },
    {
        id: 9,
        category: 'Desenvolvimento Web',
        title: 'Code Experience',
        description: 'Evento educacional voltado para alunos do ensino médio, com sistema de entrega de exercícios e registro de presença geolocalizado.',
        technologies: ['Node.js', 'React', 'PostgreSQL', 'Express', 'JWT', 'Sequelize', 'Geolocalização'],
        image: CodeExperience,
        liveUrl: 'https://codeexp.unimar.br/',
        githubUrl: 'https://github.com/EduardoMnzs/CodeExperience-Backend',
        fullDescription: `O Code Experience é um evento educacional proposto pela Universidade de Marília (UNIMAR), com foco em despertar o interesse de estudantes do ensino médio pela programação e pela área de tecnologia dando uma introdução prática em Python.

        Como parte da iniciativa, foi desenvolvido um sistema completo que automatiza a entrega de listas de exercícios em Python, organizadas por dias de atividade e temas abordados. Os participantes acessam a plataforma para visualizar os desafios e submeter suas soluções.

        Além disso, para garantir a presença e o controle de participação de forma segura e tecnológica, o sistema implementa um mecanismo de registro de presença baseado em:
        - Palavra-chave diária, única e liberada durante o evento
        - Geolocalização, que valida se o aluno está em um raio de até 1km do local do evento

        Essa solução não apenas automatiza a gestão do evento, mas também integra conceitos modernos como autenticação, rastreamento via GPS, controle de turmas e gamificação do aprendizado.

        O Code Experience promoveu um ambiente imersivo e prático, estimulando jovens a aprender lógica de programação de maneira dinâmica e interativa.`,

        highlights: [
            'Entrega automatizada de exercícios em Python',
            'Registro de presença via palavra-chave e geolocalização',
            'Autenticação e controle de participantes',
            'Incentivo ao ensino de programação para o ensino médio',
            'Sistema acessível e responsivo para alunos e organizadores'
        ]
    },
    {
        id: 10,
        category: 'Desenvolvimento Web',
        title: 'Piveta Treinamentos',
        description: 'Portal de treinamentos com foco em usinagem e técnicas de vendas, com materiais didáticos, vídeos, scripts e jogos interativos.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Educação Corporativa', 'Gamificação'],
        image: PivetaTreinamentos,
        liveUrl: 'https://piveta-treinamentos.vercel.app/',
        githubUrl: 'https://github.com/InvPiveta/Piveta-Treinamentos',
        fullDescription: `O Piveta Treinamentos é uma plataforma educacional interna desenvolvida para capacitar colaboradores da Piveta com foco em usinagem, técnicas de vendas e atendimento ao cliente. O site reúne uma variedade de conteúdos didáticos cuidadosamente organizados para apoiar o desenvolvimento técnico e comercial da equipe.

        A plataforma oferece:
        - Vídeos explicativos sobre processos de usinagem e abordagens de vendas
        - Scripts prontos para atendimento e negociação
        - Jogos interativos que simulam situações reais de venda
        - Materiais em PDF e apresentações para estudo individual ou em grupo

        Com uma interface moderna, responsiva e intuitiva, o sistema também aplica princípios de gamificação para engajar os usuários e permitir que gestores acompanhem o progresso de cada colaborador por meio de trilhas de aprendizado e relatórios.

        Essa iniciativa fortalece o processo de capacitação contínua dentro da empresa, tornando o aprendizado mais acessível, eficiente e alinhado com os objetivos estratégicos da Piveta.`,

        highlights: [
            'Capacitação técnica e comercial em um só lugar',
            'Conteúdos em vídeo, texto e jogos interativos',
            'Scripts de vendas para diferentes situações',
            'Ambiente gamificado com trilhas de aprendizado',
            'Painel de progresso para gestores e colaboradores'
        ]
    },
    {
        id: 11,
        category: 'Mobile App',
        title: 'UniLife',
        description: 'Aplicativo de gamificação universitária que recompensa alunos da Unimar com pontos por participação em eventos, convertendo em descontos ou prêmios.',
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Express', 'JWT', 'Sequelize', 'Geolocalização', 'Gamificação', 'Universidade'],
        image: UniLife,
        liveUrl: null,
        githubUrl: 'https://github.com/EduardoMnzs/UniLife-backend',
        fullDescription: `O UniLife é um aplicativo mobile desenvolvido para promover o engajamento estudantil dentro da Universidade de Marília (Unimar) por meio de um sistema de pontuação por participação em eventos acadêmicos, culturais e esportivos. Cada vez que um aluno participa de um evento promovido pela instituição, ele acumula pontos que podem ser trocados por descontos em produtos, serviços ou até mesmo na mensalidade.

        O sistema registra a presença do aluno por meio de palavra-chave, QR Code ou geolocalização, garantindo segurança e validação precisa da participação. Os pontos são organizados em um perfil individual e podem ser acompanhados em tempo real.

        O UniLife busca incentivar a vivência universitária de forma divertida e meritocrática, aproximando os estudantes das atividades extracurriculares e reconhecendo seu envolvimento com a universidade.`,

        highlights: [
            'Pontuação por participação em eventos da Unimar',
            'Troca de pontos por produtos, serviços ou descontos',
            'Presença validada por QR Code, palavra-chave ou geolocalização',
            'Perfil do aluno com histórico de eventos e pontuação',
            'Sistema de gamificação para aumentar o engajamento estudantil'
        ]
    }
];

const technologies = ["Todos", "React", "Flask", "React Native", "Node.js", "Python"];
const categories = ["Todos", "Desenvolvimento Web", "Mobile App", "Sistemas Embarcados"];
const PROJECTS_PER_PAGE = 6;


// --- COMPONENTE ---

const AllProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedTech, setSelectedTech] = useState("Todos");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentPage, setCurrentPage] = useState(1);
    const [isGridVisible, setIsGridVisible] = useState(false);
    const gridRef = useRef(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

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
                        <div className="dropdown">
                            <button className="dropdown-button"><Filter size={16} /> Tecnologia: {selectedTech}</button>
                            <div className="dropdown-content">{technologies.map(tech => <button key={tech} onClick={() => setSelectedTech(tech)}>{tech}</button>)}</div>
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-button"><Filter size={16} /> Categoria: {selectedCategory}</button>
                            <div className="dropdown-content">{categories.map(cat => <button key={cat} onClick={() => setSelectedCategory(cat)}>{cat}</button>)}</div>
                        </div>
                    </div>
                </section>

                <div className="projects-grid" ref={gridRef}>
                    {currentProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card ${isGridVisible ? 'animate-in' : ''}`}
                            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            onMouseMove={e => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                                card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
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