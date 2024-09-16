import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { RiJavascriptLine } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
export const experiencesData = [
    {
        title: "Graduei em análise e desenvolvimento de sistemas",
        location: "Brazil, BA",
        description:
            "Aprendi sobre ciência da computação, banco de dados, inglês, ciência de dados, pedrões de projetos, programação e muitas outras coisas.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "Mergulho profundo em desenvolvimento web",
        location: "",
        description:
            "Neste período eu eu foquei em refinar minhas skills em desenvolvimento web. Eu aprendi os fundamentos do Javascript, Typescript, Git, Github. Aprendi frameworks como o React, Vue, Angular, Nextjs e o ecossistema do javascript de uma forma geral.",
        icon: React.createElement(RiJavascriptLine),
        date: "2023 - 2024",
    },
    {
        title: "Linguagens backend e infraestrutura",
        location: "",
        description:
            'Neste período estou estudando a infraestrutura por trás de uma aplicação web. Eu construí o projeto Galeria de Imagens, onde utilizei serviços da AWS como S3 bucket para salvar imagens e Lambda Function para realizar o processamento de imagens, Meu segundo projeto Webhook Tester, realizei o deploy em uma instância Ec2 na AWS, utilizei o web server Nginx como um proxy para habilitar TLS na aplicação, também realizei um "deploy duplo" utilizando o Nginx onde um backend em nodeJS está hospedado no caminho /api e um react SPA na rota root /. Neste período também estou explorando outras linguagens como o Python, Rust e Golang.',
        icon: React.createElement(FaAws),
        date: "2024 - present",
    },
] as const;
