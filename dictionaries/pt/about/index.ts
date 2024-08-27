import React from "react";
import AboutParagraph from "./aboutParagraph";

const about = {
    header: "sobre mim",
    paragraph: React.createElement(AboutParagraph),
} as const;

export default about;
