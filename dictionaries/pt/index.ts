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
} as const;

export default pt;
