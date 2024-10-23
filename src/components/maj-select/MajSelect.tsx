import { MajSelectProps } from "./MajSelect.type";

import "./MajSelect.scss";

const MajSelect: React.FC<MajSelectProps> = (props: MajSelectProps) => {
    return (
        <section>
            <select>
                {props.options.map((element) => (
                    <option value={element.value}>{element.name}</option>
                ))}
            </select>
        </section>
    );
};

export default MajSelect;
