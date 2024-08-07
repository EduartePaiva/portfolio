"use client";

import Image from "next/image";
import profile from "@/public/profile.jpg";
import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section>
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

            <p>
                <span className="font-bold">Hello I&apos;m Eduarte</span>{" "}
                I&apos;m a&nbsp;
                <span className="font-bold">
                    full stack developer
                </span> with{" "}
                <span className="font-bold">2 years of experience</span> I enjoy
                building <span className="italic">sites & apps</span>. My focus
                is <span className="underline">React (Next.js)</span>.
            </p>
        </section>
    );
}
