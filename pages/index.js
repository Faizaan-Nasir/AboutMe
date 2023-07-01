"use client";
import HomePage from "../components/HomePage/HomePage";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Projects from "../components/Projects/Projects";
import Divider from "../components/ThemeComponents/Dividers";
import { ThemeContext, ThemeProvider } from "../lib/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
export default function Page() {
    return (
        <ThemeProvider>
            <Content></Content>
        </ThemeProvider>
    );
}

export function Content() {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        let bg =
            theme.val == 1
                ? "url('/background-black.png')"
                : "url('/background-white.png')";
        document.body.style.backgroundImage = bg;
    }, [theme]);

    return (
        <>
            <div className="error">
                <div className="error-message">
                    This website does not work well in this orientation. Please
                    use this website either vertically (if you are on your
                    mobile or on your tablet) or use the website in it&apos;s
                    default orientation.
                </div>
            </div>
            <div className="main-body">
                <HomePage></HomePage>
                <Divider />
                <About></About>
                <Divider />
                <Blog></Blog>
                <Divider />
                <Projects></Projects>
            </div>
        </>
    );
}
