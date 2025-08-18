import { MajAccordionProps } from "./MajAccordion.types";

import "./MajAccordion.scss";

const MajAccordion: React.FC<MajAccordionProps> = (props: MajAccordionProps) => {
    console.log(props);

    return (
        <>
            <button className="accordion">Section 1</button>
            <div className="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <button className="accordion">Section 2</button>
            <div className="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </>
    );
};

export default MajAccordion;
