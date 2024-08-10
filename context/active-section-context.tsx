"use client";

import { links as linksType } from "@/lib/data";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

type linksType = (typeof linksType)[number]["name"];
interface ActiveSectionContext {
    activeSection: linksType;
    setActiveSection: Dispatch<SetStateAction<linksType>>;
}

const activeSectionContext = createContext<ActiveSectionContext | null>(null);

export default function ActivateSectionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeSection, setActiveSection] = useState<linksType>("Home");
    return (
        <activeSectionContext.Provider
            value={{ activeSection, setActiveSection }}
        >
            {children}
        </activeSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(activeSectionContext);
    if (!context) {
        console.error(
            "useActiveSectionContext must be used within a ActivateSectionProvider",
        );
        throw new Error(
            "useActiveSectionContext must be used within a ActivateSectionProvider",
        );
    }
    const { activeSection, setActiveSection } = context;
    return { activeSection, setActiveSection };
}
