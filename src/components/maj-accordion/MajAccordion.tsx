import { MajAccordionProps } from "./MajAccordion.types";

import "./MajAccordion.scss";

const MajAccordion: React.FC<MajAccordionProps> = (props: MajAccordionProps) => {
    console.log(props);

    return (
        <>
            <button className="accordion">Section 1</button>
            <div className="panel">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <button className="accordion">Section 2</button>
            <div className="panel">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <button className="accordion">Section 3</button>
            <div className="panel">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </>
    );
};

export default MajAccordion;
