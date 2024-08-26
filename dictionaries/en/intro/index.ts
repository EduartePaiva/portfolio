import React from "react";
import Presentation from "./presentation";

const intro = {
    presentation: React.createElement(Presentation),
    contactBtn: "Contact me here",
    downloadBtn: "Download CV",
    resumeLink: "/files/resume_en.pdf",
} as const;

export default intro;
