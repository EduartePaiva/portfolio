import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";

// @ts-ignore LOCALES are readonly
const LOCALES: string[] = i18n.locales;

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
    const acceptLangHeader =
        request.headers.get("accept-language") ?? undefined;
    const languages = new Negotiator({
        headers: { "accept-language": acceptLangHeader },
    }).languages(LOCALES);
    const locale = matchLocale(languages, LOCALES, i18n.defaultLocale);
    return locale;
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = LOCALES.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );
    if (pathnameHasLocale) return;
    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - images directory in /public (public static images)
         */
        "/((?!api|_next/static|_next/image|files).*)",
        // Optional: only run on root (/) URL
        // "/",
    ],
};
