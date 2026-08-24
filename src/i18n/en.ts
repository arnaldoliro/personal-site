import type pt from "./pt";

// O dicionário em inglês precisa ter exatamente as mesmas chaves do português.
// Se alguma faltar ou sobrar, o TypeScript acusa no build.
type Dictionary = typeof pt;

// REVISAR: os itens marcados com [revisar] envolvem termos brasileiros sem
// equivalente direto em inglês. São escolhas editoriais minhas sobre como você
// se apresenta profissionalmente — vale você conferir e ajustar.
const en: Dictionary = {
  metadata: {
    title: "Arnaldo Liro - Full Stack Developer",
    description: "Full Stack Developer & Digital Experience Designer",
  },

  header: {
    toggleMenu: "Toggle menu",
  },

  nav: {
    home: "Home",
    about: "About Me",
    certificates: "Certificates",
    projects: "Projects",
    contact: "Contact",
  },

  hero: {
    greeting: "Hi, I'm",
    typewriter: ["Arnaldo Liro", "Full Stack Developer", "Freelancer"],
    ctaProjects: "View Projects",
    ctaContact: "Contact Me",
  },

  about: {
    titleLead: "About",
    titleHighlight: "me",
    journey: "My Journey",
    skills: "My Skills",
  },

  cards: {
    frontend: "Frontend Development",
    backend: "Backend Development",
    devops: "DevOps",
    other: "Other Skills",
  },

  timeline: {
    "ufba-start": {
      title: "Started my Science and Technology degree at UFBA",
      description: "Began my studies and fell in love with programming.",
    },
    "titan-trainee": {
      // [revisar] "Empresa Júnior" não existe fora do Brasil. Usei "Junior
      // Enterprise", que é o termo adotado internacionalmente pela rede JADE.
      title: "Joined TITAN, the Computer Engineering Junior Enterprise at UFBA",
      description:
        "Started as an External Relations trainee — my first contact with the junior enterprise world.",
    },
    "titan-dev": {
      title: "Became a full stack developer at TITAN",
      description:
        "REST APIs with NestJS and Express, PostgreSQL through Prisma, React/Next.js frontends and deployment with Docker and AWS.",
    },
    "research-po": {
      // [revisar] "Iniciação Científica" traduzido como "Undergraduate
      // Research"; "case de sucesso" como "success story".
      title: "Undergraduate Research at UFBA and Product Owner of DRE Metrics",
      description:
        "Built the web platform for the NOUS research group and led DRE Metrics, an app that became a success story in Bahia.",
    },
    "titan-president": {
      title: "President of TITAN",
      description:
        "Led a team of more than 60 people and headed the organization of SIMTech 2025, with over 500 registered attendees.",
    },
    "santa-casa": {
      title: "Java Developer at Santa Casa da Bahia",
      description:
        "Maintained legacy systems, worked on microservices and handled production incidents over SSH in Linux environments.",
    },
    sudoeste: {
      // [revisar] PNCP é o portal de compras públicas do governo brasileiro;
      // adicionei uma explicação curta, já que a sigla não diz nada fora do Brasil.
      title: "Junior Developer at Sudoeste Informática",
      description:
        "Currently working with SQL Server, integrations with Brazilian government APIs (PNCP) and maintenance of management systems in production.",
    },
  },

  certificates: {
    titleLead: "My",
    titleHighlight: "Certificates",
    description: "Courses and recognitions that shaped my journey.",
    achievementsHeading: "Achievements",
    items: {
      "santander-backend": {
        title: "Back End Bootcamp",
      },
    },
    achievements: {
      onc: {
        title: "Bronze Medal",
        // [revisar] Mantive a sigla original entre parênteses, já que é o nome
        // oficial da olimpíada no Brasil e pode ser conferido por um recrutador.
        description: "Brazilian National Science Olympiad (ONC)",
      },
    },
  },

  projects: {
    titleLead: "My",
    titleHighlight: "Projects",
    descriptionLine1: "Take a look at some of the projects I've built throughout my career.",
    descriptionLine2: "Each one represents a unique challenge and a chance to learn something new.",
    seeMoreOnGithub: "See more on GitHub",
    viewProject: "View Project",
    imageAlt: "Screenshot of the {title} project",
    items: {
      "microservices-backend": {
        title: "Backend - Microservices Architecture",
        description:
          "Backend API built with NestJS using a microservices architecture, with database, messaging and frontend integration.",
      },
      "form-automation": {
        title: "Form Submission Automation",
        description:
          "Automated script to collect, process and send form data to external systems efficiently.",
      },
      "personal-portfolio": {
        title: "Personal Portfolio",
        description:
          "My personal website built with Next.js, Tailwind CSS and animations, showcasing my projects and skills.",
      },
    },
  },

  contact: {
    titleLead: "Contact",
    titleHighlight: "me",
    description:
      "I'm always open to new opportunities and collaborations. If you have an interesting project or just want to chat, feel free to send me a message!",
    formHeading: "Send a message",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "Your email",
    messageLabel: "Message",
    messagePlaceholder: "Your message",
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
    errorRateLimited: "You've sent too many messages. Please try again in a moment.",
    errorValidation: "Please check the information provided (name, email and message) and try again.",
    errorGeneric: "Failed to send the message. Please try again later.",
    infoHeading: "Contact Information",
    emailInfoLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    location: "Salvador, Brazil",
    socialHeading: "Social Media",
    emailAriaLabel: "Send an email",
    whatsappAriaLabel: "Chat on WhatsApp",
    whatsappMessage: "Hi! I saw your portfolio and I'd like to talk.",
  },

  footer: {
    rights: "All rights reserved.",
  },
};

export default en;
