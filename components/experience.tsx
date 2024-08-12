"use client";

import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { Fragment } from "react";
import { useActiveSectionInView } from "@/lib/hooks";
import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimeline/VerticalTimelineElement";

export default function Experience() {
    const { ref } = useActiveSectionInView("Experience", 0.2);

    return (
        <section id="experience">
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline>
                {experiencesData.map((item, index) => (
                    <Fragment key={index}>
                        <VerticalTimelineElement visible>
                            <h3>{item.title}</h3>
                            <p>{item.location}</p>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>
                    </Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
