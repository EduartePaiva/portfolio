import React from "react";
import Presentation from "./presentation";

const intro = {
    presentation: React.createElement(Presentation),
    contactBtn: "Contacte-me aqui",
    downloadBtn: "Baixar currículo",
    resumeLink: "/files/resume.pdf",
} as const;

export default intro;
