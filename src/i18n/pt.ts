// Sem 'as const': o dicionário PT define o formato que o EN precisa seguir,
// e travar os valores como literais impediria o EN de ter textos diferentes
const pt = {
  metadata: {
    title: "Arnaldo Liro - Full Stack Developer",
    description: "Desenvolvedor Full Stack & Designer de Experiências Digitais",
  },

  // Usado tanto pelo menu de navegação quanto pelo rodapé, para os rótulos
  // não divergirem entre os dois como acontecia antes
  nav: {
    home: "Início",
    about: "Sobre Mim",
    certificates: "Certificados",
    projects: "Projetos",
    contact: "Contato",
  },

  hero: {
    greeting: "Olá, eu sou",
    typewriter: ["Arnaldo Liro", "Desenvolvedor Full Stack", "Freelancer"],
    ctaProjects: "Ver Projetos",
    ctaContact: "Entre em Contato",
  },

  about: {
    titleLead: "Sobre",
    titleHighlight: "mim",
    journey: "Minha Jornada",
    skills: "Minhas Habilidades",
  },

  cards: {
    frontend: "Desenvolvimento Frontend",
    backend: "Desenvolvimento Backend",
    devops: "DevOps",
    other: "Outras Habilidades",
  },

  timeline: {
    "ufba-start": {
      title: "Iniciei a faculdade de Ciência e Tecnologia na UFBA",
      description: "Comecei meus estudos e me apaixonei por programação.",
    },
    "titan-trainee": {
      title: "Entrei na TITAN, Empresa Júnior de Engenharia da Computação da UFBA",
      description:
        "Comecei como trainee de Relações Externas, meu primeiro contato com o mundo de empresas júnior.",
    },
    "titan-dev": {
      title: "Virei desenvolvedor full stack na TITAN",
      description:
        "APIs REST com NestJS e Express, PostgreSQL via Prisma, frontend em React/Next.js e deploy com Docker e AWS.",
    },
    "research-po": {
      title: "Iniciação Científica na UFBA e Product Owner do DRE Metrics",
      description:
        "Desenvolvi a plataforma web do grupo de pesquisa NOUS e liderei o DRE Metrics, app que virou case de sucesso na Bahia.",
    },
    "titan-president": {
      title: "Presidente da TITAN",
      description:
        "Coordenei uma equipe de mais de 60 pessoas e liderei a organização do SIMTech 2025, com mais de 500 inscritos.",
    },
    "santa-casa": {
      title: "Desenvolvedor Java na Santa Casa da Bahia",
      description:
        "Mantive sistemas legados, atuei em microsserviços e dei suporte a incidentes em produção via SSH em ambientes Linux.",
    },
    sudoeste: {
      title: "Desenvolvedor júnior na Sudoeste Informática",
      description:
        "Trabalho hoje com SQL Server, integrações com APIs do governo (PNCP) e manutenção de sistemas de gestão em produção.",
    },
  },

  certificates: {
    titleLead: "Meus",
    titleHighlight: "Certificados",
    description: "Cursos e reconhecimentos que marcaram minha trajetória.",
    achievementsHeading: "Conquistas",
    items: {
      "santander-backend": {
        title: "Bootcamp Back End",
      },
    },
    achievements: {
      onc: {
        title: "Medalha de Bronze",
        description: "Olimpíada Nacional de Ciências (ONC)",
      },
    },
  },

  projects: {
    titleLead: "Meus",
    titleHighlight: "Projetos",
    descriptionLine1: "Conheça alguns dos projetos que desenvolvi ao longo da minha carreira.",
    descriptionLine2: "Cada um representa um desafio único e uma oportunidade de aprendizado.",
    seeMoreOnGithub: "Ver mais no GitHub",
    viewProject: "Ver Projeto",
    // {title} é substituído pelo nome do projeto
    imageAlt: "Imagem do projeto {title}",
    items: {
      "microservices-backend": {
        title: "Backend - Arquitetura de Microserviços",
        description:
          "API backend desenvolvida em NestJS usando arquitetura de microserviços, banco de dados, mensageria e integração com frontend.",
      },
      "form-automation": {
        title: "Automatização de Envio de Formulário",
        description:
          "Script automatizado para coletar, processar e enviar dados de formulários para sistemas externos de forma eficiente.",
      },
      "personal-portfolio": {
        title: "Portfólio Pessoal",
        description:
          "Meu site pessoal desenvolvido com Next.js, Tailwind CSS e animações, apresentando meus projetos e habilidades.",
      },
    },
  },

  contact: {
    titleLead: "Entre em",
    titleHighlight: "Contato",
    description:
      "Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto interessante ou apenas quer conversar, sinta-se à vontade para me enviar uma mensagem!",
    formHeading: "Envie uma mensagem",
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    emailLabel: "Email",
    emailPlaceholder: "Seu e-mail",
    messageLabel: "Mensagem",
    messagePlaceholder: "Sua mensagem",
    submit: "Enviar Mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada com sucesso!",
    errorRateLimited: "Você enviou muitas mensagens. Tente novamente em instantes.",
    errorValidation: "Verifique os dados informados (nome, e-mail e mensagem) e tente novamente.",
    errorGeneric: "Erro ao enviar a mensagem. Tente novamente mais tarde.",
    infoHeading: "Informações de Contato",
    emailInfoLabel: "Email",
    phoneLabel: "Telefone",
    locationLabel: "Localização",
    location: "Salvador, Brasil",
    socialHeading: "Redes Sociais",
    emailAriaLabel: "Enviar e-mail",
    whatsappAriaLabel: "Conversar no WhatsApp",
    // Texto que já vai preenchido ao abrir a conversa no WhatsApp
    whatsappMessage: "Olá! Vi seu portfólio e gostaria de conversar.",
  },

  footer: {
    rights: "Todos os direitos reservados.",
  },
};

export default pt;
