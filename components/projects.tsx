import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { Fragment } from "react";
import Project from "./project";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-28">
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
