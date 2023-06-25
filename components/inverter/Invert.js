export default function Inverter() {
    return (
        <>
            <button id="invert">
                <img src="sun.png" alt="sun" className="mode" />
            </button>
        </>
    );
}

function invert() {
    if (localStorage.visited == 0) {
        document.getElementById(
            "body"
        ).style.backgroundImage = `url('./src/background-white.png')`;
        document.getElementById("h1").style.color = "black";
        nav_links = document.querySelectorAll(".nav-links");
        nav_links.forEach((element) => {
            element.style.color = "black";
            element.classList.add("changed");
        });
        document.getElementById("img1").style.borderColor = "rgb(40, 124, 105)";
        image1 = document.querySelectorAll(".fade-image-1");
        image1.forEach((x) => {
            x.classList.add("changed");
        });
        image2 = document.querySelectorAll(".fade-image-2");
        image2.forEach((y) => {
            y.classList.add("changed");
        });
        image3 = document.querySelectorAll(".fade-image-3");
        image3.forEach((z) => {
            z.classList.add("changed");
        });
        line = document.querySelectorAll(".line");
        line.forEach((element) => {
            element.classList.add("changed");
        });
        document.getElementById("hr1").style.backgroundColor =
            "rgb(40, 124, 105)";
        document.getElementById(
            "invert"
        ).innerHTML = `<img src="./src/moon.png" alt="sun" class="mode">`;
        document.getElementById("heading-1").style.color = "black";
        document.getElementById("about-me-content").style.color = "black";
        document.getElementById("navbar-pages-1").style.backgroundColor =
            "rgb(40, 124, 105)";
        navbar_pages_links = document.querySelectorAll(".navbar-pages-links");
        navbar_pages_links.forEach((element) => {
            element.classList.add("changed");
        });
        document.getElementById("hr2").style.backgroundColor =
            "rgb(40, 124, 105)";
        document.getElementById("heading-2").style.color = "black";
        document.getElementById("navbar-pages-2").style.backgroundColor =
            "rgb(40, 124, 105)";
        document.getElementById("entries").style.color = "black";
        date_entry_content = document.querySelectorAll(".date-entry-content");
        date_entry_content.forEach((element) => {
            element.style.borderColor = "rgb(40, 124, 105)";
        });
        localStorage.visited = localStorage.visited + 1;
        containers = document.querySelectorAll(".project-boxes");
        containers.forEach((element) => {
            element.classList.add("changed");
        });
        containers_excess = document.querySelectorAll(".project-boxes-excess");
        containers_excess.forEach((element) => {
            element.classList.add("changed");
        });
        document.getElementById("heading-3").style.color = "black";
        document.getElementById("navbar-pages-3").style.backgroundColor =
            "rgb(40, 124, 105)";
        headings = document.querySelectorAll(".headings");
        headings.forEach((element) => {
            element.style.backgroundColor = "rgb(59, 179, 151, 0.65)";
        });
    } else {
        window.location.href = "index.html";
    }
    document.getElementById("hr3").style.backgroundColor = "rgb(40, 124, 105)";
}
