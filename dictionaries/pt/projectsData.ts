import rmtdevImg from "@/public/rmtdev.png";
import corpcommentImg from "@/public/corpcomment.png";
export const projectsData = [
    {
        title: "Webhook Tester",
        description:
            "Um webapp que permite desenvolvedores testarem seus webhooks localmente sem a necessidade de realizar um deploy.",
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
        title: "Galeria de Imagem",
        description:
            "Permite usuários salvar uma galeria de imagens. O app possui capacidades como recorte de imagens e redimensionamento",
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
