import logo from "../../../../assets/icons/svg/light/unlock.svg";
import "../../assets/MajIcon.scss";

const MajUnlockIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="unlock"
        />
    );
};

export default MajUnlockIcon;
