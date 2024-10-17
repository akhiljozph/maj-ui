import { MajTextFieldProps } from "./MajTextField.types";

import "./MajTextField.scss";

const MajTextField: React.FC<MajTextFieldProps> = (props: MajTextFieldProps) => {
    return (
        <section>
            <textarea rows={props.rows} cols={props.cols}></textarea>
        </section>
    );
};

export default MajTextField;
