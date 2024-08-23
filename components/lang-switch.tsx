"use client";

import { langType } from "@/middleware";
import Image from "next/image";
import en from "@/public/en.png";
import pt from "@/public/pt.png";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useRouter } from "next/navigation";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";

const flagIcons = {
    en: { name: "English", flag: en },
    pt: { name: "Português", flag: pt },
} as const;

export default function LangSwitch({ lang }: { lang: langType }) {
    const { activeSection } = useActiveSectionContext();
    const route = useRouter();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        className="fixed bottom-20 right-5 bg-white dark:bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-110 transition-all"
                        onClick={() => {
                            route.push(
                                "/pt#" + activeSection.toLocaleLowerCase(),
                            );
                        }}
                    >
                        <Image
                            src={flagIcons[lang].flag}
                            width={20}
                            alt={flagIcons[lang].name}
                        />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Switch to {lang === "en" ? "Português" : "English"}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
