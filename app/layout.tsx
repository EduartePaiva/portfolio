import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActivateSectionProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Eduarte | Portfolio",
    description:
        "Eduarte é um desenvolvedor full-stack com 2 anos de experiência.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <ThemeProvider>
                <body
                    className={`
                    ${inter.className}
                    bg-gray-50
                    text-gray-950
                    dark:bg-gray-900
                    dark:text-gray-50
                    dark:text-opacity-90
                    relative
                    pt-28
                    sm:pt-36
                `}
                >
                    <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
                    <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                    <ActivateSectionProvider>
                        <Header />
                        {children}
                    </ActivateSectionProvider>
                    <Footer />
                    <Toaster position="top-right" />
                    <ThemeSwitch />
                </body>
            </ThemeProvider>
        </html>
    );
}
