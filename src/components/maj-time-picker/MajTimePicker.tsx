import { MajTimePickerProps } from "./MajTimePicker.types";

import "./MajTimePicker.scss";

const MajTimePicker: React.FC<MajTimePickerProps> = () => {
    return (
        <>
            <input
                type="time"
                className="time"
            />
        </>
    );
};

export default MajTimePicker;
