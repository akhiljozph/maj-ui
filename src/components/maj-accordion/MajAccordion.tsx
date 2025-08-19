import { MajAccordionProps } from "./MajAccordion.types";

import "./MajAccordion.scss";
import { MajP } from "../maj-typography";

const MajAccordion: React.FC<MajAccordionProps> = (props: MajAccordionProps) => {
    function onAccordionTitleClick() {
        console.log("Clicked");
    }

    return (
        <>
            <button
                className="accordion"
                onClick={onAccordionTitleClick}
            >
                {props?.accordionTitle}
            </button>
            <div className="panel">
                <MajP>{props?.children}</MajP>
            </div>
        </>
    );
};

export default MajAccordion;
