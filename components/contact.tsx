"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useActiveSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { dictionaryType } from "@/get-dictionary";

export default function Contact({
    dictionary,
}: {
    dictionary: dictionaryType["contact"];
}) {
    const { ref } = useActiveSectionInView("Contact", 0.4);
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        >
            <SectionHeading>{dictionary.header}</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                {dictionary.textBeforeEmail}{" "}
                <a className="underline" href="mailto:eduarte2018.po@gmail.com">
                    eduarte2018.po@gmail.com
                </a>{" "}
                {dictionary.textAfterEmail}
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    console.log(data);
                    toast.success(dictionary.toastSuccess);
                }}
            >
                <input
                    className="px-4 h-14 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder={dictionary.emailPlaceHolder}
                    type="email"
                    required
                    name="senderEmail"
                    maxLength={500}
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder={dictionary.messagePlaceholder}
                    required
                    maxLength={5000}
                ></textarea>
                <SubmitBtn text={dictionary.btnText} />
            </form>
        </motion.section>
    );
}
