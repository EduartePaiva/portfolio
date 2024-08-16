"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useActiveSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me at{" "}
                <a className="underline" href="mailto:eduarte2018.po@gmail.com">
                    eduarte2018.po@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                    }
                    console.log(data);
                    toast.success("Email sent successfully");
                }}
            >
                <input
                    className="px-4 h-14 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder="Your email"
                    type="email"
                    required
                    name="senderEmail"
                    maxLength={500}
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                ></textarea>
                <SubmitBtn />
            </form>
        </motion.section>
    );
}
