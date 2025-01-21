import logo from "../../../../assets/icons/svg/light/angle-down.svg";
import "../../assets/MajIcon.scss";

const MajAngleDownIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="angle-down"
        />
    );
};

export default MajAngleDownIcon;
