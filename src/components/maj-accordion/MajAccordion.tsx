import { useState } from "react";

import { MajAccordionProps } from "./MajAccordion.types";
import { MajP } from "../maj-typography";

import "./MajAccordion.scss";

const MajAccordion: React.FC<MajAccordionProps> = (props: MajAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    function onAccordionTitleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="maj-accordion-wrapper">
            <button
                className="accordion"
                style={props?.accordionTitleStyle}
                onClick={onAccordionTitleClick}
            >
                {props?.accordionTitle}
            </button>
            <div className={`panel ${isOpen ? "open" : ""}`}>
                <MajP>{props?.children}</MajP>
            </div>
        </div>
    );
};

export default MajAccordion;
