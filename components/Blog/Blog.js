import Navbar from "../navbar/Navbar";

export default function Blog() {
    return (
        <section id="blog" className="blog" onmouseenter="blog()">
            <h2 id="heading-2">
                Weblog
                <Navbar except={"Weblog"}></Navbar>
            </h2>
            <div className="entries" id="entries">
                <div className="date">
                    <h3 className="date-entry">10th March, 2023:</h3>
                    <div className="date-entry-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Inventore distinctio earum excepturi eligendi,
                        nemo illum nihil perferendis ea eius beatae quae? Quia
                        nisi nemo molestias dolores, veniam doloremque sint
                    </div>
                </div>
                <div className="date">
                    <h3 className="date-entry">9th March, 2023:</h3>
                    <div className="date-entry-content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Consectetur laudantium ea voluptas eveniet, qui
                        facere sequi quos accusantium nemo culpa fugit itaque
                        ullam, neque rem? Esse doloribus autem non ratione.
                    </div>
                </div>
                <div className="date">
                    <h3 className="date-entry">8th March, 2023:</h3>
                    <div className="date-entry-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, nam libero, eveniet omnis culpa consequuntur dolores
                        est sint quam totam nihil id quae ipsa mollitia iusto
                        aperiam placeat atque ducimus.
                    </div>
                </div>
            </div>
        </section>
    );
}
