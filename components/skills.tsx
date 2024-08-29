"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useActiveSectionInView } from "@/lib/hooks";
import { motion, type Variants } from "framer-motion";
import { dictionaryType } from "@/get-dictionary";

const fadeInAnimationVariants: Variants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.05 * index },
    }),
};

export default function Skills({
    dictionary,
}: {
    dictionary: dictionaryType["skills"];
}) {
    const { ref } = useActiveSectionInView("Skills", 0.8);
    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>{dictionary}</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        className="bg-white borderBlack rounded-xl px-5 py-3 dark:text-white/80 dark:bg-white/10"
                        key={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
