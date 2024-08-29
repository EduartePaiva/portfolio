import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dictionary = getDictionary(lang);
    return (
        <main className="flex flex-col items-center px-4">
            <Intro dictionary={dictionary.intro} />
            <SectionDivider />
            <About dictionary={dictionary.about} />
            <Projects dictionary={dictionary.projects} />
            <Skills dictionary={dictionary.skills} />
            <Experience dictionary={dictionary.experience} />
            <Contact dictionary={dictionary.contact} />
        </main>
    );
}
