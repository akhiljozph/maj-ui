import { MajAccordionProps } from "./MajAccordion.types";

import "./MajAccordion.scss";
import { MajSection } from "../index";

const MajAccordion: React.FC<MajAccordionProps> = (props: MajAccordionProps) => {
    return (
        <MajSection>
            <button>{props?.accordionTitle}</button>
            <div>{props?.children}</div>
        </MajSection>
    );
};

export default MajAccordion;
