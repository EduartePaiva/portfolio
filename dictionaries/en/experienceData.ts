import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { RiJavascriptLine } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
export const experiencesData = [
    {
        title: "Graduated systems analysis and development",
        location: "Brazil, BA",
        description:
            "I learned about computer science, database, english, data science, design patterns, programming and a lot more things.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "Deep dive in Web Developer",
        location: "",
        description:
            "For this period I kept refining my web development skills, I learned the fundamentals of Javascript, Typescript, Git, Github. Learned frameworks like react, vue, angular, Nextjs, and the javascript ecosystem in general.",
        icon: React.createElement(RiJavascriptLine),
        date: "2023 - 2024",
    },
    {
        title: "Backend languages and Infrastructure",
        location: "",
        description:
            "For this period I'm studying the infrastructure side of things, I build the Image Gallery where I used AWS services like S3 bucket for storing images and a Lambda Function for processing uploaded images, I deployed the Webhook Tester project on a Ec2 AWS instance where I setup a Nginx proxy to enable TLS and to host a node server on the /api route alongside with an react SPA on the root / route. I learned others languages like Python, Rust and Golang",
        icon: React.createElement(FaAws),
        date: "2024 - present",
    },
] as const;
