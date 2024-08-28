import rmtdevImg from "@/public/rmtdev.png";
import corpcommentImg from "@/public/corpcomment.png";
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
    },
    {
        title: "Galeria de Imagem",
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
    },
] as const;
