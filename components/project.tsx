"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { type dictionaryType } from "@/get-dictionary";

type ProjectProps = dictionaryType["projects"]["projectsData"][number];

export default function Project({
    description,
    imageUrl,
    tags,
    title,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            ref={ref}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:group-even:pl-8 hover:bg-gray-200 rounded-lg transition dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] dark:text-white/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition
                        hidden sm:block    

                        group-hover:scale-[1.04] 
                        group-hover:-translate-x-3 
                        group-hover:translate-y-3 
                        group-hover:-rotate-2 
    
                        group-even:group-hover:translate-x-3
                        group-even:group-hover:rotate-2
                        group-even:right-[initial] 
                        group-even:-left-40 
                    "
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                />
            </section>
        </motion.div>
    );
}
