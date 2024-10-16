import { MajSelectProps } from "./MajSelect.type";

import "./MajSelect.scss";

const MajSelect: React.FC<MajSelectProps> = (props: MajSelectProps) => {
    return (
        <section>
            <select>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
            </select>
        </section>
    );
};

export default MajSelect;
