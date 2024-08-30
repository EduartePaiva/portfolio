import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Webhook Tester",
        description:
            "A webapp that facilitates developers to easily test their webhooks before deploying the application.",
        tags: [
            "React",
            "Tailwind",
            "Express",
            "Postgres",
            "Drizzle ORM",
            "jwt",
            "socket io",
            "ec2",
            "Nginx",
        ],
        imageUrl: corpcommentImg,
        projectLink: "https://webhook.eduartepaiva.com",
    },
    {
        title: "Image Gallery",
        description:
            "Allow users to upload a gallery of images, It have capabilities like image cropping, and resizing.",
        tags: [
            "Next.JS",
            "TypeScript",
            "rust",
            "Tailwind",
            "React",
            "Drizzle orm",
            "clerk",
            "aws",
            "s3",
            "lambda function",
        ],
        imageUrl: rmtdevImg,
        projectLink: "https://gallery.eduartepaiva.com",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "Tailwind",
    "Git",
    "JavaScript",
    "TypeScript",
    "SQL",
    "PostgreSQL",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Socket.io",
    "Prisma",
    "Drizzle ORM",
    "Framer Motion",
    "Jwt",
    "Clerk",
    "AWS",
    "Ec2",
    "S3",
    "Aws Lambda",
    "Nginx",
    "Python",
    "Rust",
    "Golang",
] as const;
