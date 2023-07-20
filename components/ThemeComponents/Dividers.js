import { useContext } from "react";
import { ThemeContext } from "../../lib/ThemeContext";

export default function Divider() {
    const { theme } = useContext(ThemeContext);
    return (
        <hr
            id="hr2"
            style={{
                backgroundColor: `${
                    theme.val == 1 ? "white" : "rgb(40, 124, 105)"
                }`,
            }}
        />
    );
}
