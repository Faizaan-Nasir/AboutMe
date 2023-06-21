import "../styles/globals.css"
import HomePage from "../components/HomePage/HomePage";


export default function Page() {
    return (
        <>
        
            <div className="error">
                <div className="error-message">
                    This website does not work well in this orientation. Please
                    use this website either vertically (if you are on your
                    mobile or on your tablet) or use the website in it&apos;s
                    default orientation.
                </div>
            </div>
            <div className="main-body">
            <HomePage></HomePage>
                <hr id="hr1" />
                <section
                    id="about-me"
                    className="about-me"
                    onmouseenter="about_me()"
                >
                    <div className="fade-image-1"></div>
                    <div className="fade-image-2"></div>
                    <div className="fade-image-3"></div>
                    <h2 id="heading-1">
                        About Me <br />
                        <div className="navbar-pages" id="navbar-pages-1">
                            <a href="#blog" className="navbar-pages-links">
                                Weblog
                            </a>
                            <a href="#home" className="navbar-pages-links">
                                Home
                            </a>
                            <a href="#projects" className="navbar-pages-links">
                                Projects
                            </a>
                        </div>
                    </h2>

                    <div className="about-me-content" id="about-me-content">
                        I am Faizaan, a grade 12 student studying in Delhi
                        Private School, Sharjah. Born in the year 2006, I have
                        been in the UAE for as long as I can remember.
                        <br />
                        <br />
                        I am interested in a wide variety of fields including
                        aviation, astrophysics, computer science and medical
                        science (it&apos;s unblievable, I know). I&apos;m not
                        much into sports, although I do play badminton
                        passionately. I would like to pursue a career in
                        Software Engineering and am preparing for the same.
                        <br />
                        <br />
                        My hobbies include simulating, watching movies and
                        frequently taking up projects that I do not end up
                        finishing. Feel free to explore this webpage and the
                        projects I&apos;ve worked on (and hopefully completed by
                        now).
                    </div>
                    <div className="line"></div>
                </section>
                <hr id="hr2" />
                <section id="blog" className="blog" onmouseenter="blog()">
                    <h2 id="heading-2">
                        Weblog
                        <div className="navbar-pages" id="navbar-pages-2">
                            <a href="#about-me" className="navbar-pages-links">
                                About Me
                            </a>
                            <a href="#home" className="navbar-pages-links">
                                Home
                            </a>
                            <a href="#projects" className="navbar-pages-links">
                                Projects
                            </a>
                        </div>
                    </h2>
                    <div className="entries" id="entries">
                        <div className="date">
                            <h3 className="date-entry">10th March, 2023:</h3>
                            <div className="date-entry-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Inventore distinctio earum
                                excepturi eligendi, nemo illum nihil perferendis
                                ea eius beatae quae? Quia nisi nemo molestias
                                dolores, veniam doloremque sint
                            </div>
                        </div>
                        <div className="date">
                            <h3 className="date-entry">9th March, 2023:</h3>
                            <div className="date-entry-content">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Consectetur laudantium ea
                                voluptas eveniet, qui facere sequi quos
                                accusantium nemo culpa fugit itaque ullam, neque
                                rem? Esse doloribus autem non ratione.
                            </div>
                        </div>
                        <div className="date">
                            <h3 className="date-entry">8th March, 2023:</h3>
                            <div className="date-entry-content">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ab, nam libero, eveniet omnis
                                culpa consequuntur dolores est sint quam totam
                                nihil id quae ipsa mollitia iusto aperiam
                                placeat atque ducimus.
                            </div>
                        </div>
                    </div>
                </section>
                <hr id="hr3" />
                <section
                    className="projects"
                    id="projects"
                    onmouseenter="projects()"
                >
                    <h2 id="heading-3">
                        Projects
                        <div className="navbar-pages" id="navbar-pages-3">
                            <a href="#about-me" className="navbar-pages-links">
                                About Me
                            </a>
                            <a href="#home" className="navbar-pages-links">
                                Home
                            </a>
                            <a href="#blog" className="navbar-pages-links">
                                Weblog
                            </a>
                        </div>
                    </h2>
                    <div className="project-boxes-container">
                        <div className="project-boxes">
                            <div className="headings">DPS Trading Platform</div>
                            <div className="description">
                                <h3>DPS Trading Platform</h3>
                                <a href="https://github.com/TanmeenPatel/DPS-Trading-Platform">
                                    <img
                                        src="/github-icon.png"
                                        alt="github"
                                        width="25px"
                                    />
                                </a>
                                <br />
                                Website to learn the risks involved in
                                investments.
                            </div>
                        </div>
                        <div className="project-boxes">
                            <div className="headings">ShopOnline</div>
                            <div className="description">
                                <h3>ShopOnline</h3>
                                <a href="https://github.com/Faizaan-Nasir/ShopOnline">
                                    <img
                                        src="/github-icon.png"
                                        alt="github"
                                        width="25px"
                                    />
                                </a>
                                <br />
                                This is a template for store owners looking for
                                a pre-made website for their stores.
                            </div>
                        </div>
                        <div className="project-boxes-excess">
                            <div className="headings">SQL and Python</div>
                            <div className="description">
                                <h3>SQL and Python</h3>
                                <a href="https://github.com/Faizaan-Nasir/Student-Record-Keeping-System">
                                    <img
                                        src="/github-icon.png"
                                        alt="github"
                                        width="25px"
                                    />
                                </a>
                                <br />A python program that connects python with
                                SQL and allows for manipulation of data.
                            </div>
                        </div>
                        <div className="project-boxes-excess">
                            <div className="headings">School Library</div>
                            <div className="description">
                                <h3>School Library</h3>
                                <a href="https://github.com/Faizaan-Nasir/Library">
                                    <img
                                        src="/github-icon.png"
                                        alt="github"
                                        width="25px"
                                    />
                                </a>
                                <br />A website for schools that stores data
                                about students and their books borrowed (JS).
                            </div>
                        </div>
                        <div className="project-boxes-excess">
                            <div className="headings">Website Builder</div>
                            <div className="description">
                                <h3>Website Builder</h3>
                                <a href="https://github.com/Faizaan-Nasir/Website-Builder">
                                    <img
                                        src="/github-icon.png"
                                        alt="github"
                                        width="25px"
                                    />
                                </a>
                                <br />A python interface with which one can
                                create a website in less than ten minutes.
                            </div>
                        </div>
                        <div className="project-boxes-excess">
                            <div className="headings">Pet Advisor</div>
                            <div className="description">
                                <h3>Pet Advisor</h3>
                                <a href="https://github.com/pet-advisor/pets">
                                    <img
                                        src="/github-icon.png"
                                        alt="github"
                                        width="25px"
                                    />
                                </a>
                                <br />A website created by a team of 4 that
                                helps pet owners with general day to day needs
                                for their pets.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
