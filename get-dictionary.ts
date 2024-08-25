import "server-only";
import type { Locale } from "./i18n-config";
import en from "./dictionaries/en";
import pt from "./dictionaries/pt";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    en: () => en,
    pt: () => pt,
};

export const getDictionary = (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en();

export type dictionaryType = ReturnType<typeof getDictionary>;
