import { MajToggleProps } from "./MajToggle.types";

import "./MajToggle.scss";
import { useState } from "react";

const MajToggle: React.FC<MajToggleProps> = (props: MajToggleProps) => {
    const [selectedToggle, setSelectedToggle] = useState<number>(1);
    return (
        <section className="maj-toggle">
            <button
                className={
                    "maj-toggle-btn maj-toggle-one " + (selectedToggle === 1 ? "active" : "")
                }
                onClick={() => setSelectedToggle(1)}
            >
                <label className="maj-toggle-label">{props.toggleOneLabel}</label>
            </button>
            <button
                className={
                    "maj-toggle-btn maj-toggle-two " + (selectedToggle === 2 ? "active" : "")
                }
                onClick={() => setSelectedToggle(2)}
            >
                <label className="maj-toggle-label">{props.toggleTwoLabel}</label>
            </button>
        </section>
    );
};

export default MajToggle;
