import logo from "../../../../assets/icons/svg/light/caret-right.svg";
import "../../assets/MajIcon.scss";

const MajCaretRightIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-icon"
            src={logo}
            alt="caret-right"
        />
    );
};

export default MajCaretRightIcon;
