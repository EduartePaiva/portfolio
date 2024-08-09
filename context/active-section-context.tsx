import { links as linksType } from "@/lib/data";
import { createContext } from "react";

type linksType = (typeof linksType)[number]["name"];

const activeSectionContext = createContext<linksType>("Home");
