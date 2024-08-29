import ptFlag from "@/public/pt.png";
import intro from "./intro";
import about from "./about";
import { projectsData } from "./projectsData";
import { experiencesData } from "./experienceData";

const pt = {
    header: [
        "Início",
        "Sobre",
        "Projetos",
        "Habilidades",
        "Experiência",
        "Contato",
    ],
    "lang-switch": {
        "tooltip-text": "Mude para Inglês",
        lang: "pt",
        "flag-icon": { name: "Português", flag: ptFlag },
    },
    intro: intro,
    about: about,
    themeSwitch: {
        light: "Mude para modo escuro",
        dark: "Mude para modo claro",
    },
    projects: {
        projectsData,
        header: "meus projetos",
    },
    skills: "minhas habilidades",
    experience: { header: "minha experiência", experiencesData },
    contact: {
        header: "Contact-me",
        textBeforeEmail: "Por favor, contact-me pelo email",
        textAfterEmail: "ou através do formulário abaixo.",
        toastSuccess: "Email enviado com sucesso",
        emailPlaceHolder: "Seu email",
        messagePlaceholder: "Sua mensagem",
        btnText: "Enviar",
    },
    footer: {
        text1: "2024 Eduarte. Todos os direitos reservados.",
        text2: "Sobre este website:",
        text3: "feito com React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Hospedagem Vercel.",
    },
} as const;

export default pt;
