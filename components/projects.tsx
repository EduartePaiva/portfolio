"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { Fragment, useEffect } from "react";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.7 });
    const { setActiveSection } = useActiveSectionContext();
    useEffect(() => {
        if (inView) {
            setActiveSection("Projects");
        }
    }, [inView, setActiveSection]);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {" "}
                {projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <Project {...project} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
