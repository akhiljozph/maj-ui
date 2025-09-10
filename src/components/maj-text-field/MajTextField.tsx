import { MajTextFieldProps } from "./MajTextField.types";

import "./MajTextField.scss";
import { MajSection } from "../maj-section";

const MajTextField: React.FC<MajTextFieldProps> = (props: MajTextFieldProps) => {
    return (
        <MajSection>
            <textarea
                rows={props.rows ? props.rows : 10}
                cols={props.cols ? props.cols : 10}
                placeholder={props.placeholder ? props.placeholder : "Description please..."}
            ></textarea>
        </MajSection>
    );
};

export default MajTextField;
