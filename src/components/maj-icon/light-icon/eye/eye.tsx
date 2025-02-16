import logo from "../../../../assets/icons/svg/light/eye.svg";
import "../../assets/MajIcon.scss";

const MajEyeIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="eye"
        />
    );
};

export default MajEyeIcon;
