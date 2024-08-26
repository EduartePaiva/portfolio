import React from "react";
import Presentation from "./presentation";

const intro = {
    presentation: React.createElement(Presentation),
    contactBtn: "Contacte-me aqui",
    downloadBtn: "Baixar Currículo",
    resumeLink: "/files/resume_pt_br.pdf",
} as const;

export default intro;
