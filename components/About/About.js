import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../Navbar/Navbar";
import Heading from "../ThemeComponents/SectionHeading";
import { ThemeContext } from "../../lib/ThemeContext";
import Section from "../Section/Section";

export default function About() {
    const { theme } = useContext(ThemeContext);
    return (
        <Section
            title="About Me"
            icon="/about_me.png"
            className="about-me"
            id="about-me"
        >
            <div
                className={`fade-image-1 ${theme.val == 1 ? "" : "changed"}`}
            ></div>
            <div
                className={`fade-image-2 ${theme.val == 1 ? "" : "changed"}`}
            ></div>
            <div
                className={`fade-image-3 ${theme.val == 1 ? "" : "changed"}`}
            ></div>
            <Heading>
                About Me <br />
                <Navbar except={"About Me"}></Navbar>
            </Heading>

            <div
                className="about-me-content"
                id="about-me-content"
                style={{ color: `${theme.val == 1 ? "white" : "black"}` }}
            >
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
            <div className={`line ${theme.val == 1 ? "" : "changed"}`}></div>
        </Section>
    );
}
