"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(form: FormData) {
    const senderEmail = form.get("senderEmail");
    const message = form.get("message");

    if (!validateString(message, 5000)) {
        return {
            error: "invalid message",
        };
    }
    if (!validateString(senderEmail, 500)) {
        return {
            error: "invalid sender email",
        };
    }
    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: ["delivered@resend.dev"],
            reply_to: senderEmail as string,
            subject: "Message from contact form",
            text: message as string,
        });
    } catch (err) {
        console.error(err);
        return {
            error: getErrorMessage(err),
        };
    }
}
