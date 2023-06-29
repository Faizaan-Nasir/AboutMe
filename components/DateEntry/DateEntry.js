import { useContext } from "react";
import { ThemeContext } from "../../lib/ThemeContext";

export default function DateEntry({ date, children }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="date">
            <h3 className="date-entry">{date}:</h3>
            <div
                className="date-entry-content"
                style={{
                    borderColor: `${
                        theme.val == 1 ? "white" : "rgb(40, 124, 105)"
                    }`,
                }}
            >
                {children}
            </div>
        </div>
    );
}
