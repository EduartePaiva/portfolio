"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { type CreateEmailResponse, Resend } from "resend";
import { createElement } from "react";
import ContactFormEmail from "@/email/contact-form-email";
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
    let data: CreateEmailResponse;
    try {
        data = await resend.emails.send({
            from: "Contact Form <portfolio@eduarte.pro>",
            to: ["eduarteoliveira2021@gmail.com"],
            replyTo: senderEmail as string,
            subject: "Message from contact form",
            react: createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
    } catch (err) {
        console.error(err);
        return {
            error: getErrorMessage(err),
        };
    }
    return { data };
}
