import { ThemeContext } from "../../lib/ThemeContext";
import { useContext } from "react";

export default function Heading({ children }) {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <h2
                id="heading"
                style={{ color: theme.val == 1 ? "white" : "black" }}
            >
                {children}
            </h2>
        </>
    );
}
