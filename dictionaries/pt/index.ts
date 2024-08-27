import ptFlag from "@/public/pt.png";
import intro from "./intro";
import about from "../en/about";

const pt = {
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
} as const;

export default pt;
