"use client";

import { BsSun } from "react-icons/bs";

export default function LangSwitch() {
    return (
        <button className="fixed bottom-20 right-5 bg-black dark:bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-110 transition-all">
            <BsSun />
        </button>
    );
}
