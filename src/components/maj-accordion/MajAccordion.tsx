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
        <>
            <button
                className="accordion"
                onClick={onAccordionTitleClick}
            >
                {props?.accordionTitle}
            </button>
            <div className={`panel ${isOpen ? "open" : ""}`}>
                <MajP>{props?.children}</MajP>
            </div>
        </>
    );
};

export default MajAccordion;
