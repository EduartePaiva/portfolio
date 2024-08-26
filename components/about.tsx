"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useActiveSectionInView } from "@/lib/hooks";
import { dictionaryType } from "@/get-dictionary";

export default function About({
    dictionary,
}: {
    dictionary: dictionaryType["about"];
}) {
    const { ref } = useActiveSectionInView("About");
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
            id="about"
        >
            <SectionHeading>{dictionary.header}</SectionHeading>
            {dictionary.paragraph}
        </motion.section>
    );
}
