import webhookImg from "@/public/webhook-tester.png";
import galleryDarkImg from "@/public/img-gallery-dark.png";
import galleryLightImg from "@/public/img-gallery-light.png";

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
        imageUrl: { dark: webhookImg, light: webhookImg },
        projectLink: "https://github.com/EduartePaiva/webhook-tester",
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
        imageUrl: { dark: galleryDarkImg, light: galleryLightImg },

        projectLink: "https://github.com/EduartePaiva/image-uploader-galery",
    },
] as const;
