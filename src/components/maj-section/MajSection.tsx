import { MajSectionProps } from "./MajSection.types";

import "./MajSection.scss";

const MajSection = (props: MajSectionProps) => {
    return <section className={`maj-section ${props?.className}`}>{props?.children}</section>;
};

export default MajSection;
