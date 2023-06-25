import Navbar from "../navbar/Navbar";

export default function About() {
    return (
        <section id="about-me" className="about-me" onmouseenter="about_me()">
            <div className="fade-image-1"></div>
            <div className="fade-image-2"></div>
            <div className="fade-image-3"></div>
            <h2 id="heading-1">
                About Me <br />
                <Navbar except={"About Me"}></Navbar>
            </h2>

            <div className="about-me-content" id="about-me-content">
                I am Faizaan, a grade 12 student studying in Delhi Private
                School, Sharjah. Born in the year 2006, I have been in the UAE
                for as long as I can remember.
                <br />
                <br />
                I am interested in a wide variety of fields including aviation,
                astrophysics, computer science and medical science (it&apos;s
                unblievable, I know). I&apos;m not much into sports, although I
                do play badminton passionately. I would like to pursue a career
                in Software Engineering and am preparing for the same.
                <br />
                <br />
                My hobbies include simulating, watching movies and frequently
                taking up projects that I do not end up finishing. Feel free to
                explore this webpage and the projects I&apos;ve worked on (and
                hopefully completed by now).
            </div>
            <div className="line"></div>
        </section>
    );
}
