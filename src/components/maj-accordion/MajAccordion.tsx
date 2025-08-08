import { MajAccordionProps } from "./MajAccordion.types";

import "./MajAccordion.scss";
import { MajButton, MajSection } from "../index";

const MajAccordion: React.FC<MajAccordionProps> = (props: MajAccordionProps) => {
    return (
        <MajSection>
            <MajButton>{props?.accordionTitle}</MajButton>
            <div>{props?.children}</div>
        </MajSection>
    );
};

export default MajAccordion;
