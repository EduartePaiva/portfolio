"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { Fragment } from "react";
import Project from "./project";
import { useActiveSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useActiveSectionInView("Projects", 0.4);
    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <Project {...project} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
