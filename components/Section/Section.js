import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Section({ className, id, icon, title, children }) {
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
            document.getElementById("icon").href = icon;
            document.getElementById("title").innerHTML = title;
        }
    }, [inView]);

    return (
        <section id={id} ref={ref} className={className}>
            {children}
        </section>
    );
}
