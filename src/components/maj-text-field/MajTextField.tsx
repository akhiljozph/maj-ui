import { MajTextFieldProps } from "./MajTextField.types";

import "./MajTextField.scss";

const MajTextField: React.FC<MajTextFieldProps> = (props: MajTextFieldProps) => {
    return (
        <section>
            <textarea
                rows={props.rows ? props.rows : 10}
                cols={props.cols ? props.cols : 10}
                placeholder={props.placeholder ? props.placeholder : "Description please..."}
            ></textarea>
        </section>
    );
};

export default MajTextField;
