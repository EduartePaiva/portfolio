import flagEn from "@/public/en.png";
import intro from "./intro";
import about from "./about";

const en = {
    "lang-switch": {
        "tooltip-text": "Switch to Portuguese",
        lang: "en",
        "flag-icon": { name: "English", flag: flagEn },
    },
    intro: intro,
    about: about,
} as const;
export default en;
