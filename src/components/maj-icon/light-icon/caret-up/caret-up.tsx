import logo from "../../../../assets/icons/svg/light/caret-up.svg";
import "../../assets/MajIcon.scss";

const MajCaretUpIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="caret-up"
        />
    );
};

export default MajCaretUpIcon;
