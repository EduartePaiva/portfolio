import webhookImg from "@/public/webhook-tester.png";
import galleryDarkImg from "@/public/img-gallery-dark.png";
import galleryLightImg from "@/public/img-gallery-light.png";
import maxOauthImg from "@/public/max-oauth.png";
import notionCloneImg from "@/public/notion-clone.png";



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

    {
        title: "Max OAuth",
        description:
            "implementation of 10 different OAuth 2.0 providers",
        tags: [
            "Next.JS",
            "React",
            "TypeScript",
            "Tailwind",
            "PostgreSQL",
            "Drizzle ORM",
            "Lucia Auth",
            "OAuth 2.0",
        ],
        imageUrl: { dark: maxOauthImg, light: maxOauthImg },

        projectLink: "https://github.com/EduartePaiva/max-oauth2-services-in-one-app-nextjs",
    },
    {
        title: "Ai Notion Clone",
        description:
            "Um clone do notion com funcionalidades de IA e compartilhamento de documentos",
        tags: [
            "Next.JS",
            "React",
            "LiveBlocks",
            "Open AI",
            "Clerk",
            "Cloudflare Workers",
            "Hono",
            "PostgreSQL",
            "React Query",
        ],
        imageUrl: { dark: notionCloneImg, light: notionCloneImg },
        projectLink: "https://github.com/EduartePaiva/ai-notion-clone",
    },
] as const;
