import { MajRadioGroupProps } from "./MajRadioGroup.types";

import "./MajRadioGroup.scss";

const MajRadioGroup: React.FC<MajRadioGroupProps> = (props: MajRadioGroupProps) => {
    return (
        <section>
            {props.radioLists.map((item: string) => (
                <>
                    <input
                        type="radio"
                        name={props?.name}
                    />
                    <label>{item}</label>
                </>
            ))}
        </section>
    );
};

export default MajRadioGroup;
