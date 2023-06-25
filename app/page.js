import "../styles/globals.css";
import HomePage from "../components/HomePage/HomePage";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Projects from "../components/Projects/Projects";
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
                <About></About>
                <hr id="hr2" />
                <Blog></Blog>
                <hr id="hr3" />
                <Projects></Projects>
            </div>
        </>
    );
}
