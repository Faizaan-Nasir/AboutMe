import ProjectBox from "./ProjectBoxes";
import Navbar from "../Navbar/Navbar";
import Heading from "../ThemeComponents/SectionHeading";
export default function Projects() {
    return (
        <section className="projects" id="projects">
            <Heading>
                Projects
                <Navbar except="Projects"></Navbar>
            </Heading>
            <div className="project-boxes-container">
                <ProjectBox
                    title="DPS Trading Platform"
                    link="https://github.com/TanmeenPatel/DPS-Trading-Platform"
                    desc="Website to learn the risks involved in investments."
                ></ProjectBox>
                <ProjectBox
                    title="ShopOnline"
                    link="https://github.com/Faizaan-Nasir/ShopOnline"
                    desc="This is a template for store owners looking for a pre-made website for their stores."
                ></ProjectBox>
                <ProjectBox
                    title="SQL and Python"
                    link="https://github.com/Faizaan-Nasir/Student-Record-Keeping-System"
                    desc="A python program that connects python with SQL and allows for manipulation of data."
                    excess
                ></ProjectBox>
                <ProjectBox
                    title="School Library"
                    link="https://github.com/Faizaan-Nasir/Library"
                    desc="A website for schools that stores data about
                    students and their books borrowed (JS)."
                    excess
                ></ProjectBox>
                <ProjectBox
                    title="Website Builder"
                    link="https://github.com/Faizaan-Nasir/Website-Builder"
                    desc="A python interface with which one can create a
                    website in less than ten minutes."
                    excess
                ></ProjectBox>
                <ProjectBox
                    title="Pet Advisor"
                    link="https://github.com/pet-advisor/pets"
                    desc="A website created by a team of 4 that helps pet owners with general day to day needs for their pets."
                    excess
                ></ProjectBox>
            </div>
        </section>
    );
}
