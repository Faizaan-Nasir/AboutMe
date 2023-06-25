export default function ProjectBox({ title, desc, link, excess }) {
    return (
        <div className={excess ? "project-boxes-excess" : "project-boxes"}>
            <div className="headings">{title}</div>
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
