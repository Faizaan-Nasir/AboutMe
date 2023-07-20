import HomePage from "../components/HomePage/HomePage";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Projects from "../components/Projects/Projects";
import Divider from "../components/ThemeComponents/Dividers";
import Head from "next/head";
import { ThemeContext, ThemeProvider } from "../lib/ThemeContext";
import { useContext, useEffect } from "react";
import DateEntry from "../components/DateEntry/DateEntry";
import { GetProjects, GetUpdates } from "../contentful/contentful";
import ProjectBox from "../components/Projects/ProjectBoxes";
export default function Page(props) {
    return (
        <ThemeProvider>
            <Head>
                <title id="title">Home Page</title>
                <link
                    rel="shortcut icon"
                    href="/home_page.png"
                    type="image/x-icon"
                    id="icon"
                />
            </Head>
            <ThemeController>
                <div className="error">
                    <div className="error-message">
                        This website does not work well in this orientation.
                        Please use this website either vertically (if you are on
                        your mobile or on your tablet) or use the website in
                        it&apos;s default orientation.
                    </div>
                </div>
                <div className="main-body">
                    <HomePage></HomePage>
                    <Divider />
                    <About></About>
                    <Divider />
                    <Blog>
                        {props.updates.map((u) => {
                            let date = new Date(u.fields.dateOfEntry);
                            return (
                                <DateEntry
                                    key={u.sys.id}
                                    date={date.toDateString()}
                                    content={u.fields.description}
                                ></DateEntry>
                            );
                        })}
                    </Blog>
                    <Divider />
                    <Projects>
                        {props.projects.map((p, i) => {
                            return (
                                <ProjectBox
                                    title={p.fields.name}
                                    link={p.fields.link}
                                    image_link={p.fields.imageLink}
                                    desc={p.fields.description}
                                    key={i}
                                    excess={i > 2}
                                />
                            );
                        })}
                    </Projects>
                </div>
            </ThemeController>
        </ThemeProvider>
    );
}

export function ThemeController({ children }) {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        let bg =
            theme.val == 1
                ? "url('/background-black.png')"
                : "url('/background-white.png')";
        document.body.style.backgroundImage = bg;
    }, [theme]);

    return children;
}

export async function getStaticProps() {
    const updates = await GetUpdates(5);
    const projects = await GetProjects(6);
    return {
        props: {
            updates,
            projects,
        },
        revalidate: 10 * 60, // Revalidates every 10 minutes
    };
}
