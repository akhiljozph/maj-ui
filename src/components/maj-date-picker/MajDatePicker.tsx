import { MajDatePickerProps } from "./MajDatePicker.type";

const MajDatePicker: React.FC<MajDatePickerProps> = (props: MajDatePickerProps) => {
    return (
        <section>
            <input
                type="date"
                name="maj-date-picker"
                id="maj-date-picker"
            />
        </section>
    );
};

export default MajDatePicker;
