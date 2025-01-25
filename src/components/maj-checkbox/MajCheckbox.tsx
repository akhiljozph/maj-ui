import { MajCheckboxProps } from "./MajCheckbox.type";

import "./MajCheckbox.scss";

const MajCheckbox: React.FC<MajCheckboxProps> = (props: MajCheckboxProps) => {
    return (
        <section>
            <input type="checkbox" />
            <label>{props?.label}</label>
        </section>
    );
};

export default MajCheckbox;
