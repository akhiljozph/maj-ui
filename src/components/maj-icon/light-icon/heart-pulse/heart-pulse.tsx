import logo from "../../../../assets/icons/svg/light/heart-pulse.svg";
import "../../assets/MajIcon.scss";

const MajHeartPulseIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="heart-pulse"
        />
    );
};

export default MajHeartPulseIcon;
