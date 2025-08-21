import { useState } from "react";

import { MajAccordionProps } from "./MajAccordion.types";
import { MajP, MajSubScript } from "../maj-typography";

import "./MajAccordion.scss";

const MajAccordion: React.FC<MajAccordionProps> = (props: MajAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    function onAccordionTitleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="maj-accordion-wrapper">
                <button
                    className="accordion-title-wrapper"
                    style={props?.accordionTitleStyle}
                    onClick={onAccordionTitleClick}
                >
                    <label className="accordion-title">{props?.accordionTitle}</label>
                    <span className="accordion-icon">
                        {isOpen ? (
                            <MajSubScript>&#x2212;</MajSubScript>
                        ) : (
                            <MajSubScript>&#x2b;</MajSubScript>
                        )}
                    </span>
                </button>
                <div className={`accordion-panel ${isOpen ? "accordion-expanded" : ""}`}>
                    <MajP>{props?.children}</MajP>
                </div>
            </div>
        </>
    );
};

export default MajAccordion;
