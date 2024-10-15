import { MajRadioGroupProps } from "./MajRadioGroup.types";

import "./MajRadioGroup.scss";

const MajRadioGroup: React.FC<MajRadioGroupProps> = (props: MajRadioGroupProps) => {
    return (
        <section
            className={
                "radio-group-wrapper " +
                (props?.alignment === "horizontal"
                    ? "horizontal-group"
                    : props?.alignment === "vertical"
                      ? "vertical-group"
                      : "horizontal-group")
            }
        >
            {props.radioLists.map((item: string) => (
                <div>
                    <input
                        type="radio"
                        name={props?.name}
                    />
                    <label>{item}</label>
                </div>
            ))}
        </section>
    );
};

export default MajRadioGroup;
