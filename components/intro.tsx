"use client";

import Image from "next/image";
import profile from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { dictionaryType } from "@/get-dictionary";

export default function Intro({
    dictionary,
}: {
    dictionary: dictionaryType["intro"];
}) {
    const { ref } = useActiveSectionInView("Home");
    const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
    return (
        <section
            ref={ref}
            id="home"
            className="scroll-mt-96 mb-28 max-w-[50rem] text-center sm:mb-0"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <Image
                            src={profile}
                            width={192}
                            height={192}
                            quality={95}
                            alt="Eduarte portrait"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.1,
                            stiffness: 125,
                            duration: 0.7,
                        }}
                        className="text-4xl absolute bottom-0 right-0"
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            >
                {dictionary.presentation}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            >
                <Link
                    onClick={() => {
                        setTimeOfLastClick(Date.now());
                        setActiveSection("Contact");
                    }}
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >
                    {dictionary.contactBtn}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <a
                    href={dictionary.resumeLink}
                    download
                    className="group bg-white dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
                >
                    {dictionary.downloadBtn}
                    <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
                </a>
                <a
                    href="https://www.linkedin.com/in/eduarte-paiva-a40728266/"
                    target="_blank"
                    className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] focus:text-gray-950 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/EduartePaiva"
                    target="_blank"
                    className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] focus:text-gray-950 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
