import { useContext } from "react";
import { ThemeContext } from "../../lib/ThemeContext";

export default function ProjectBox({ title, desc, link, image_link, excess }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`${excess ? "project-boxes-excess" : "project-boxes"} ${
                theme.val == 1 ? "" : "changed"
            }`}
            style={{
                backgroundImage: image_link
                    ? `url(${image_link})`
                    : "url(/sample.jpg)",
                backgroundPosition:'center',
                backgroundSize:'cover'
            }}
        >
            <div className={`headings ${theme.val == 1 ? "" : "changed"}`}>
                {title}
            </div>
            <div className="description">
                <h3>{title}</h3>
                <a href={link}>
                    <img src="/github-icon.png" alt="github" width="25px" />
                </a>
                <br />
                {desc}
            </div>
        </div>
    );
}
