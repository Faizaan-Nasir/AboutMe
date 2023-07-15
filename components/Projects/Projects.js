import ProjectBox from "./ProjectBoxes";
import Navbar from "../Navbar/Navbar";
import Heading from "../ThemeComponents/SectionHeading";
import Section from "../Section/Section";
export default function Projects({ children }) {
    return (
        <Section
            className="projects"
            icon="/projects.png"
            title="Projects"
            id="projects"
        >
            <Heading>
                Projects
                <Navbar except="Projects"></Navbar>
            </Heading>
            <div className="project-boxes-container">{children}</div>
        </Section>
    );
}
