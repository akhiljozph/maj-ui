import { MajDateTimePickerProps } from "./MajDateTimePicker.type";

import "./MajDateTimePicker.scss";

const MajDateTimePicker: React.FC<MajDateTimePickerProps> = (props: MajDateTimePickerProps) => {
    return (
        <>
            <input
                type="datetime-local"
                name="maj-date-time-picker"
                id="maj-date-time-picker"
                min={props?.minimumValue}
                max={props?.maximumValue}
            />
        </>
    );
};

export default MajDateTimePicker;
