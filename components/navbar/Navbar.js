export default function Navbar({ except }) {
    const all_pages = {
        Weblog: "#blog",
        Home: "#home",
        Projects: "#projects",
        "About Me": "#about-me",
    };
    return (
        <div className="navbar-pages" id="navbar-pages-1">
            {Object.keys(all_pages).map((i) => {
                if (i != except) {
                    return (
                        <a
                            href={all_pages[i]}
                            className="navbar-pages-links"
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
