import { MajAccordionProps } from "./MajAccordion.types";

import "./MajAccordion.scss";

const MajAccordion: React.FC<MajAccordionProps> = (props: MajAccordionProps) => {
    return (
        <>
            <button>{props?.accordionTitle}</button>
            <div>{props?.children}</div>
        </>
    );
};

export default MajAccordion;
