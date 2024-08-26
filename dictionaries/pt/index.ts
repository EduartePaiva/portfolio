import ptFlag from "@/public/pt.png";
import intro from "./intro";

const pt = {
    "lang-switch": {
        "tooltip-text": "Mude para Inglês",
        lang: "pt",
        "flag-icon": { name: "Português", flag: ptFlag },
    },
    intro: intro,
} as const;

export default pt;
