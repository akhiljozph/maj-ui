import logo from "../../../../assets/icons/svg/solid/check.svg";
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
