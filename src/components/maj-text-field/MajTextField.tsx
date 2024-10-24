import { MajTextFieldProps } from "./MajTextField.types";

const MajTextField: React.FC<MajTextFieldProps> = (props: MajTextFieldProps) => {
    return (
        <section>
            <textarea
                rows={props.rows}
                cols={props.cols}
            ></textarea>
        </section>
    );
};

export default MajTextField;
