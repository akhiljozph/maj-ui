import { MajToggleProps } from "./MajToggle.types";

import "./MajToggle.scss";
import { useState } from "react";

const MajToggle: React.FC<MajToggleProps> = (props: MajToggleProps) => {
    const [selectedToggle, setSelectedToggle] = useState<number>(1);
    const [isToggled, setIsToggled] = useState<boolean>(false);

    return (
        <section className="maj-toggle">
            {props?.toggleOneLabel && props?.toggleTwoLabel ? (
                <>
                    <button
                        className={
                            "maj-toggle-btn maj-toggle-one " +
                            (selectedToggle === 1 ? "maj-toggle-active" : "")
                        }
                        onClick={() => setSelectedToggle(1)}
                    >
                        <label className="maj-toggle-label">{props?.toggleOneLabel}</label>
                    </button>
                    <button
                        className={
                            "maj-toggle-btn maj-toggle-two " +
                            (selectedToggle === 2 ? "maj-toggle-active" : "")
                        }
                        onClick={() => setSelectedToggle(2)}
                    >
                        <label className="maj-toggle-label">{props?.toggleTwoLabel}</label>
                    </button>
                </>
            ) : (
                <button
                    className={
                        "maj-default-toggle " +
                        (isToggled ? "toggle-end-align" : "toggle-start-align")
                    }
                    onClick={() => {
                        setIsToggled(!isToggled);
                    }}
                >
                    <span className="maj-toggle-action"></span>
                </button>
            )}
        </section>
    );
};

export default MajToggle;
