"use client";
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
type Theme = "dark" | "light";
type ThemeProviderProps = { children: React.ReactNode };
type ThemeContextType = {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as null | Theme;
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useThemeContext must be used within an ThemeProvider");
    }
    const { setTheme, theme } = context;

    const toggleTheme = () => {
        if (theme == "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
            window.localStorage.setItem("theme", "light");
        }
    };

    return { setTheme, theme, toggleTheme };
}
