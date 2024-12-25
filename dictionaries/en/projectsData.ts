import webhookImg from "@/public/webhook-tester.png";
import galleryDarkImg from "@/public/img-gallery-dark.png";
import galleryLightImg from "@/public/img-gallery-light.png";

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
        imageUrl: { dark: webhookImg, light: webhookImg },
        projectLink: "https://github.com/EduartePaiva/webhook-tester",
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
        imageUrl: { dark: galleryDarkImg, light: galleryLightImg },
        projectLink: "https://github.com/EduartePaiva/image-uploader-galery",
    },
] as const;
