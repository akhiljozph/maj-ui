import { MajSliderProps } from "./MajSlider.types";

import "./MajSlider.scss";

const MajSlider: React.FC<MajSliderProps> = (props: MajSliderProps) => {
    return (
        <section>
            <input
                type="range"
                name={props.label}
                id={props.label}
                min={props.min}
                max={props.max}
                value={props.value}
                step={props.step}
            />
        </section>
    );
};

export default MajSlider;
