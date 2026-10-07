// Portfolio content. Edit here; components only render this data.

export const contacts = {
  email: 'hudsonteles00@gmail.com',
  github: 'https://github.com/tlshudson',
  linkedin: 'https://www.linkedin.com/in/hudson-teles-381a451ab/',
  whatsapp:
    'https://wa.me/5561985559961?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20para%20desenvolvedor%20de%20software',
  resume: '/Hudson_Tecnologia.pdf',
}

export const hero = {
  eyebrow: 'Desenvolvedor Full Stack · IA aplicada',
  headline:
    'Construo sistemas corporativos em PHP, Python e React — e agentes de IA que funcionam em produção.',
  facts: ['+4 anos em tecnologia', 'Brasília, DF · Remoto', 'PHP · Python · React'],
}

export const about = {
  paragraphs: [
    'Sou desenvolvedor Full Stack com mais de 4 anos de experiência em tecnologia, transformando requisitos de negócio em sistemas confiáveis. Já atuei em produtos dos setores financeiro, educacional, contábil, hoteleiro e de saúde, do banco de dados à interface.',
    'Hoje divido meu tempo entre a modernização de plataformas em PHP, com Symfony e Laravel, e o desenvolvimento de agentes de IA em Python com LangGraph, integrados a WhatsApp e a sistemas internos. Também uso agentes de IA no meu fluxo de desenvolvimento, com revisão, rastreabilidade e controle sobre o que chega à produção.',
  ],
  pillars: [
    {
      title: 'Back-end',
      text: 'PHP (Symfony, Laravel), Python (FastAPI) e Node.js. APIs REST, microsserviços, DDD, CQRS e arquitetura hexagonal.',
    },
    {
      title: 'IA aplicada',
      text: 'Agentes conversacionais com LangGraph e LangChain, tool calling, integração com a API da OpenAI e avaliação de qualidade do atendimento.',
    },
    {
      title: 'Front-end',
      text: 'React, Next.js, TypeScript e Vue.js, com Tailwind CSS e foco em interfaces claras e responsivas.',
    },
    {
      title: 'Dados e Cloud',
      text: 'Oracle (PL/SQL), PostgreSQL e MySQL. Docker, Oracle Cloud Infrastructure e observabilidade com Grafana.',
    },
  ],
  facts: [
    { label: 'Localidade', value: 'Brasília, DF · Trabalho remoto', icon: 'map-pin' },
    {
      label: 'Formação',
      value: 'Análise e Desenvolvimento de Sistemas (UNIP) · Pós-graduações em andamento (GRAN)',
      icon: 'academic-cap',
    },
    { label: 'Interesses', value: 'Musculação, esportes e bateria', icon: 'sparkles' },
  ],
}

// featured: highlighted in the "Principais tecnologias" row.
export const skillGroups = [
  {
    title: 'Linguagens',
    items: ['PHP', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'PL/SQL'],
  },
  {
    title: 'Back-end',
    items: [
      'Symfony',
      'Laravel',
      'FastAPI',
      'Node.js',
      'Doctrine ORM',
      'APIs REST',
      'OpenAPI / Swagger',
      'JWT e OAuth2',
    ],
  },
  {
    title: 'IA aplicada',
    items: [
      'LangGraph',
      'LangChain',
      'OpenAI API',
      'Agentes com tool calling',
      'Claude Code',
      'Codex',
    ],
  },
  {
    title: 'Front-end',
    items: [
      'React',
      'Next.js',
      'Vue.js',
      'React Native',
      'Tailwind CSS',
      'Zustand',
      'Redux',
      'Vite',
    ],
  },
  {
    title: 'Banco de dados',
    items: ['Oracle Database', 'PostgreSQL', 'MySQL / MariaDB', 'SQLite'],
  },
  {
    title: 'Cloud e DevOps',
    items: [
      'Docker',
      'Oracle Cloud Infrastructure',
      'GitHub Actions',
      'CI/CD',
      'Nginx / Apache',
      'Linux',
      'Grafana',
    ],
  },
  {
    title: 'Arquitetura e práticas',
    items: [
      'DDD',
      'CQRS',
      'Arquitetura hexagonal',
      'Microsserviços',
      'Design Patterns',
      'Testes automatizados',
      'Scrum e Kanban',
      'Jira',
      'WordPress',
    ],
  },
]

export const featuredSkills = [
  'PHP',
  'Symfony',
  'Laravel',
  'Python',
  'LangGraph',
  'React',
  'Next.js',
  'TypeScript',
  'Oracle Database',
  'PostgreSQL',
  'Docker',
]

export const experiences = [
  {
    company: 'Cogmo Technology',
    role: 'Desenvolvedor Full Stack & IA',
    period: 'Mar 2026 – Atual',
    location: 'Remoto',
    current: true,
    summary: 'Desenvolvimento de soluções com IA generativa e sistemas web para o setor contábil.',
    highlights: [
      'Agentes de IA para atendimento via WhatsApp e Chatwoot, em Python com LangGraph, LangChain e FastAPI: triagem multi-turno, encaminhamento para equipes humanas e ferramentas conectadas aos sistemas internos.',
      'Portal do cliente com assistente conversacional (React, TypeScript e backend Python/LangGraph com streaming), reunindo documentos fiscais, guias, certidões e visão 360 do cliente.',
      'Dashboard de qualidade e CSAT com análise por IA e painel de governança de prompts, ferramentas e custos de IA.',
      'Integrações entre plataformas, com login automático via postMessage e sincronização de contexto, e endpoints no backend Laravel.',
    ],
    stack: [
      'Python',
      'LangGraph',
      'LangChain',
      'FastAPI',
      'OpenAI API',
      'React',
      'TypeScript',
      'Laravel',
      'PostgreSQL',
      'Grafana',
    ],
  },
  {
    company: 'Softtek',
    role: 'Desenvolvedor Full Stack',
    period: 'Set 2025 – Atual',
    location: 'Remoto',
    current: true,
    summary: 'Consultoria de software, com alocação em projetos de clientes.',
    allocations: [
      {
        client: 'VitruTech · Vitru Educação',
        period: 'Jun 2026 – Atual',
        summary:
          'Modernização da plataforma financeira e comercial, migrando funcionalidades de um ERP acadêmico legado em PHP para microsserviços.',
        highlights: [
          'APIs REST em PHP 8.4 e Symfony 8 com Doctrine ORM, seguindo DDD, CQRS e arquitetura hexagonal, com documentação OpenAPI e testes automatizados.',
          'Integração das telas legadas ao novo microsserviço: taxas de inscrição, cursos livres, convênios de alunos, pagamento com cartão e simulação de ofertas.',
          'Consultas otimizadas em Oracle Database e qualidade garantida com PHPStan, PHPMD e code review.',
        ],
        stack: ['PHP', 'Symfony', 'Doctrine ORM', 'Oracle Database', 'Docker', 'Jira'],
      },
      {
        client: 'Dr. Consulta · HealthTech',
        period: 'Set 2025 – Jun 2026',
        summary:
          'Evolução e sustentação de aplicações de alta escala no setor de saúde, com foco em front-end.',
        highlights: [
          'Features em React, Next.js, TypeScript e SCSS, com estado em Zustand e Redux e integração com APIs REST.',
          'Ferramentas de analytics e marketing (Insider e Google) desacopladas do código de negócio com os padrões Adapter e Strategy.',
          'Testes unitários e de integração para eventos de transação e navegação.',
        ],
        stack: ['React', 'Next.js', 'TypeScript', 'SCSS', 'Zustand', 'Redux'],
      },
    ],
  },
  {
    company: 'Grupo Simão Sarkis',
    role: 'Desenvolvedor Full Stack',
    period: 'Out 2024 – Out 2025',
    location: 'Brasília, DF · Presencial',
    summary:
      'Manutenção, evolução e desenvolvimento de sistemas internos para o setor hoteleiro, atendendo Compras, Financeiro, RH e Contabilidade.',
    highlights: [
      'Servidores PHP para relatórios PDF dinâmicos e novas funcionalidades.',
      'Interfaces em Vue.js e React com Tailwind CSS, consumindo APIs documentadas em Swagger.',
      'Consultas, views e análises em Oracle Database (PL/SQL), com gestão de recursos na Oracle Cloud Infrastructure.',
    ],
    stack: ['PHP', 'Vue.js', 'React', 'Tailwind CSS', 'Oracle Database', 'OCI'],
  },
  {
    company: 'LS Tecnologia',
    role: 'Estagiário em Desenvolvimento Web Full Stack',
    period: 'Out 2024 – Jan 2025',
    location: 'Bahia · Remoto',
    summary:
      'Desenvolvimento de um ERP SaaS de controladoria hospitalar em arquitetura de microsserviços.',
    highlights: [
      'Endpoints e regras de negócio em Laravel, com componentes reutilizáveis em Vue.js.',
      'Integração entre serviços independentes em ambiente distribuído, com consultas complexas em PostgreSQL.',
    ],
    stack: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL', 'Jira'],
  },
  {
    company: 'Grupo Simão Sarkis',
    role: 'Suporte Técnico em TI N1',
    period: 'Jun 2023 – Out 2024',
    location: 'Brasília, DF · Presencial',
    summary:
      'Suporte técnico a toda a empresa em ambientes Windows, macOS e Linux, com gestão de usuários no Active Directory, redes, servidores locais e parque de impressão.',
  },
  {
    company: 'Winner Recursos Humanos · Amazon',
    role: 'Assistente de Operações',
    period: 'Abr 2023 – Jun 2023',
    location: 'Brasília, DF · Presencial',
    summary: 'Serviços temporários de operações logísticas para a ID Logistics e a Amazon.',
  },
]

export const education = [
  {
    course:
      'Pós-graduação em Arquitetura e Desenvolvimento de Sistemas com ênfase em Padrões de Projeto',
    institution: 'GRAN',
    period: 'Jun 2025 – Dez 2026 (previsão)',
  },
  {
    course: 'Pós-graduação em Desenvolvimento Full Stack e Cloud Computing',
    institution: 'GRAN',
    period: 'Conclusão prevista em Dez 2026',
  },
  {
    course: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Paulista (UNIP)',
    period: '2022 – 2024',
  },
]

export const projects = [
  {
    title: 'TaskFlow',
    subtitle: 'Gerenciador de tarefas full stack',
    description:
      'API em PHP 8 puro com arquitetura MVC própria, roteador e conexão Singleton, persistência em MySQL via PDO com prepared statements e SPA desacoplada em React 19 com TypeScript, Vite e Tailwind CSS.',
    stack: ['PHP', 'MySQL', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repository: 'https://github.com/tlshudson/task_manager',
    tree: [
      'backend-tarefas/',
      '├── config/       Singleton PDO',
      '├── controllers/  JSON responses',
      '├── models/       entidades e SQL',
      '└── src/          router',
      'frontend-tarefas/',
      '├── services/     API client',
      '├── types/        interfaces TS',
      '└── components/   UI React',
    ],
  },
]
