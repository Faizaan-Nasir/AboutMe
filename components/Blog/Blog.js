import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Heading from "../ThemeComponents/SectionHeading";
import DateEntry from "../DateEntry/DateEntry";
import { ThemeContext } from "../../lib/ThemeContext";
import Section from "../Section/Section";

export default function Blog({ children }) {
    const { theme } = useContext(ThemeContext);
    return (
        <Section className="blog" icon="/blog.png" title="Weblog" id="blog">
            <Heading>
                Weblog
                <Navbar except={"Weblog"}></Navbar>
            </Heading>
            <div
                className="entries"
                id="entries"
                style={{ color: `${theme.val == 1 ? "white" : "black"}` }}
            >
                {children}
            </div>
        </Section>
    );
}
