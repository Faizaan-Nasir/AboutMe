"use client";

import { createContext, useState } from "react";

let themes = {
    1: {
        // Dark Theme
        val: 1,
        path: "sun.png",
        alt: "sun",
    },
    0: {
        // Light Theme
        val: 0,
        path: "moon.png",
        alt: "moon",
    },
};

const ThemeContext = createContext({
    theme: themes[1],
    setTheme: () => {},
    toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes[1]);

    function toggleTheme() {
        setTheme(theme.val === 1 ? themes[0] : themes[1]);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
