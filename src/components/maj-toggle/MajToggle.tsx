import { MajToggleProps } from "./MajToggle.types";

import "./MajToggle.scss";

const MajToggle: React.FC<MajToggleProps> = (props: MajToggleProps) => {
    return (
        <section className="maj-toggle">
            <button className="maj-toggle-btn maj-toggle-one">
                <label className="maj-toggle-label">{props.toggleOneLabel}</label>
            </button>
            <button className="maj-toggle-btn maj-toggle-two">
                <label className="maj-toggle-label">{props.toggleTwoLabel}</label>
            </button>
        </section>
    );
};

export default MajToggle;
