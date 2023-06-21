import Inverter from "../inverter/Invert";

export default function HomePage() {
    return (
        <>
            <section className="home-page" id="home" onMouseEnter="home_page()">
                <Inverter></Inverter>
                <h1 id="h1">
                    Hi there! <br /> Meet Faizaan...
                </h1>
                <div className="navbar">
                    <div className="nav-links">
                        <a href="#about-me">About Me</a>
                    </div>
                    <div className="nav-links">
                        <a href="#blog">Weblog</a>
                    </div>
                    <div className="nav-links">
                        <a href="#projects">Projects</a>
                    </div>
                </div>
                <img
                    className="img1"
                    src="/Faizaan-img1.jpg"
                    alt="Faizaan Image 1"
                    id="img1"
                />
            </section>
        </>
    );
}
