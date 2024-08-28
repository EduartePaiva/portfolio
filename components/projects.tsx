"use client";
import SectionHeading from "./section-heading";
import { Fragment } from "react";
import Project from "./project";
import { useActiveSectionInView } from "@/lib/hooks";
import { type dictionaryType } from "@/get-dictionary";

export default function Projects({
    dictionary,
}: {
    dictionary: dictionaryType["projects"];
}) {
    const { ref } = useActiveSectionInView("Projects", 0.4);
    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>{dictionary.header}</SectionHeading>
            <div>
                {dictionary.projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <Project {...project} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
