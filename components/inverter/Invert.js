"use client";
import { ThemeContext } from "../../lib/ThemeContext";
import { useContext } from "react";

export default function Inverter() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <button id="invert" onClick={toggleTheme}>
                <img src={theme.path} alt={theme.alt} className="mode" />
            </button>
        </>
    );
}

function invert() {
    if (localStorage.visited == 0) {
        // Changing the background
        document.getElementById(
            "body"
        ).style.backgroundImage = `url('./src/background-white.png')`;

        // Manually changing hr1's background colour
        document.getElementById("hr1").style.backgroundColor =
            "rgb(40, 124, 105)";

        document.getElementById("hr2").style.backgroundColor =
            "rgb(40, 124, 105)";
        document.getElementById("hr3").style.backgroundColor =
            "rgb(40, 124, 105)";
    } else {
        window.location.href = "index.html";
    }
}
