import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Heading from "../ThemeComponents/SectionHeading";
import DateEntry from "../DateEntry/DateEntry";
import { ThemeContext } from "../../lib/ThemeContext";

export default function Blog() {
    const { theme } = useContext(ThemeContext);
    return (
        <section id="blog" className="blog">
            <Heading>
                Weblog
                <Navbar except={"Weblog"}></Navbar>
            </Heading>
            <div
                className="entries"
                id="entries"
                style={{ color: `${theme.val == 1 ? "white" : "black"}` }}
            >
                <DateEntry date="10th March, 2023">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore distinctio earum excepturi eligendi, nemo illum
                    nihil perferendis ea eius beatae quae? Quia nisi nemo
                    molestias dolores, veniam doloremque sint
                </DateEntry>
                <DateEntry date="9th March, 2023">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consectetur laudantium ea voluptas eveniet, qui facere sequi
                    quos accusantium nemo culpa fugit itaque ullam, neque rem?
                    Esse doloribus autem non ratione.
                </DateEntry>
                <DateEntry date="8th March, 2023">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                    nam libero, eveniet omnis culpa consequuntur dolores est
                    sint quam totam nihil id quae ipsa mollitia iusto aperiam
                    placeat atque ducimus.
                </DateEntry>
            </div>
        </section>
    );
}
