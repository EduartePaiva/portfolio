import flagEn from "@/public/en.png";
import intro from "./intro";
import about from "./about";
import { projectsData } from "@/lib/data";
import { experiencesData } from "./experienceData";

const en = {
    header: ["Home", "About", "Projects", "Skills", "Experience", "Contact"],
    "lang-switch": {
        "tooltip-text": "Switch to Portuguese",
        lang: "en",
        "flag-icon": { name: "English", flag: flagEn },
    },
    intro: intro,
    about: about,
    themeSwitch: { light: "Change to dark mode", dark: "Change to light mode" },
    projects: {
        projectsData,
        header: "my projects",
    },
    skills: "my skills",
    experience: { header: "my experience", experiencesData },
    contact: {
        header: "contact me",
        textBeforeEmail: "Please contact me at",
        textAfterEmail: "or through this form.",
        toastSuccess: "Email sent successfully",
        emailPlaceHolder: "Your email",
        messagePlaceholder: "Your message",
        btnText: "Submit",
    },
    footer: {
        text1: "2024 Eduarte. All rights reserved.",
        text2: "About this website:",
        text3: "build with React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.",
    },
} as const;
export default en;
