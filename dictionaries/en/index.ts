import flagEn from "@/public/en.png";
import intro from "./intro";

const en = {
    "lang-switch": {
        "tooltip-text": "Switch to Portuguese",
        lang: "en",
        "flag-icon": { name: "English", flag: flagEn },
    },
    intro: intro,
} as const;
export default en;
