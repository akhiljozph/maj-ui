import logo from "../../../../assets/icons/svg/solid/caret-down.svg";
import "../../assets/MajIcon.scss";

const MajCaretDownIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="caret-down"
        />
    )
};

export default MajCaretDownIcon;
