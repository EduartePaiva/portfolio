"use client";
import { useThemeContext } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { dictionaryType } from "@/get-dictionary";

export default function ThemeSwitch({
    dictionary,
}: {
    dictionary: dictionaryType["themeSwitch"];
}) {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        className="fixed bottom-5 right-5 bg-white dark:bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-110 transition-all"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? <BsSun /> : <BsMoon />}
                    </button>
                </TooltipTrigger>
                <TooltipContent>{dictionary[theme]}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
