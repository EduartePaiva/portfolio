import React from "react";
import AboutParagraph from "./aboutParagraph";

const about = {
    header: "about me",
    paragraph: React.createElement(AboutParagraph),
} as const;

export default about;
