import logo from "../../../../assets/icons/svg/light/clock.svg";
import "../../assets/MajIcon.scss";

const MajClockIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="clock"
        />
    );
};

export default MajClockIcon;
