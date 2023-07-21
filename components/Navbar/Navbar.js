import { useContext } from "react";
import { ThemeContext } from "../../lib/ThemeContext";

export default function Navbar({ except }) {
    let { theme } = useContext(ThemeContext);
    const all_pages = {
        Weblog: "#blog",
        Home: "#home",
        Projects: "#projects",
        "About Me": "#about-me",
    };
    return (
        <div
            className="navbar-pages"
            id="navbar-pages-1"
            style={{
                backgroundColor:
                    theme.val == 1 ? "#666666" : "rgb(40, 124, 105)",
            }}
        >
            {Object.keys(all_pages).map((i) => {
                if (i != except) {
                    return (
                        <a
                            href={all_pages[i]}
                            className={`navbar-pages-links ${
                                theme.val == 1 ? "" : "changed"
                            }`}
                            key={i}
                        >
                            {i}
                        </a>
                    );
                }
            })}
        </div>
    );
}
