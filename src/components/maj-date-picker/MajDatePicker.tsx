import { MajDatePickerProps } from "./MajDatePicker.type";

const MajDatePicker: React.FC<MajDatePickerProps> = (props: MajDatePickerProps) => {
    return (
        <section>
            <input
                type="date"
                name="maj-date-picker"
                id="maj-date-picker"
                min={props.minimumValue}
                max={props.maximumValue}
            />
        </section>
    );
};

export default MajDatePicker;
