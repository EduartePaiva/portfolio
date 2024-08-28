import flagEn from "@/public/en.png";
import intro from "./intro";
import about from "./about";
import { projectsData } from "@/lib/data";

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
} as const;
export default en;
