"use client";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useActiveSectionInView } from "@/lib/hooks";

export default function Contact() {
    const { ref } = useActiveSectionInView("Contact", 0.4);
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(1fr,38rem)] text-center"
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6">
                Please contact me at{" "}
                <a className="underline" href="mailto:eduarte2018.po@gmail.com">
                    eduarte2018.po@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form action="" className="mt-10 flex flex-col">
                <input
                    placeholder="Your email"
                    className="px-4 h-14 rounded-lg borderBlack"
                    type="email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4"
                    name=""
                    id=""
                    placeholder="Your message"
                ></textarea>
                <button
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all 
                        hover:scale-110 
                        hover:bg-gray-950
                        focus:scale-110 
                        focus:bg-gray-950
                        active:scale-105
                    "
                    type="submit"
                >
                    Submit{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
            </form>
        </motion.section>
    );
}
