import logo from "../../../../assets/icons/svg/solid/caret-left.svg";
import "../../assets/MajIcon.scss";

const MajCaretLeftIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="caret-left"
        />
    );
};

export default MajCaretLeftIcon;
