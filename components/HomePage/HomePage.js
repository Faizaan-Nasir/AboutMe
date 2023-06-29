"use client";

import Inverter from "../inverter/Invert";
import { useContext } from "react";
import { ThemeContext } from "../../lib/ThemeContext";

export default function HomePage() {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <section className="home-page" id="home">
                <Inverter></Inverter>
                <h1
                    id="h1"
                    style={{ color: `${theme.val == 1 ? "white" : "black"}` }}
                >
                    Hi there! <br /> Meet Faizaan...
                </h1>
                <div className="navbar">
                    <div
                        className={`nav-links ${
                            theme.val == 1 ? "" : "changed"
                        }`}
                        style={{
                            color: `${theme.val == 1 ? "white" : "black"}`,
                        }}
                    >
                        <a href="#about-me">About Me</a>
                    </div>
                    <div
                        className={`nav-links ${
                            theme.val == 1 ? "" : "changed"
                        }`}
                        style={{
                            color: `${theme.val == 1 ? "white" : "black"}`,
                        }}
                    >
                        <a href="#blog">Weblog</a>
                    </div>
                    <div
                        className={`nav-links ${
                            theme.val == 1 ? "" : "changed"
                        }`}
                        style={{
                            color: `${theme.val == 1 ? "white" : "black"}`,
                        }}
                    >
                        <a href="#projects">Projects</a>
                    </div>
                </div>
                <img
                    className="img1"
                    src="/Faizaan-img1.jpg"
                    alt="Faizaan Image 1"
                    id="img1"
                    style={{
                        borderColor: `${
                            theme.val == 1 ? "white" : "rgb(40, 124, 105)"
                        }`,
                    }}
                />
            </section>
        </>
    );
}
