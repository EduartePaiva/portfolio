"use client";

import Image from "next/image";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useRouter } from "next/navigation";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import { type dictionaryType } from "@/get-dictionary";

export default function LangSwitch({
    dictionary,
}: {
    dictionary: dictionaryType["lang-switch"];
}) {
    const { activeSection } = useActiveSectionContext();
    const route = useRouter();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        className="fixed bottom-20 right-5 bg-white dark:bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-110 transition-all"
                        onClick={() => {
                            if (dictionary.lang === "en") {
                                route.push(
                                    "/pt#" + activeSection.toLocaleLowerCase(),
                                );
                            } else {
                                route.push(
                                    "/en#" + activeSection.toLocaleLowerCase(),
                                );
                            }
                        }}
                    >
                        <Image
                            src={dictionary["flag-icon"].flag}
                            width={20}
                            alt={dictionary["flag-icon"].name}
                        />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{dictionary["tooltip-text"]}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
