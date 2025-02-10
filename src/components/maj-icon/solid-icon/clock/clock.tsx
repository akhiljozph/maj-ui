import logo from "../../../../assets/icons/svg/solid/clock.svg";
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
