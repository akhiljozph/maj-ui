import logo from "../../../../assets/icons/svg/light/check.svg";
import "../../assets/MajIcon.scss";

const MajCheckIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="check"
        />
    );
};

export default MajCheckIcon;
