import logo from "../../../../assets/icons/svg/solid/angle-down.svg";
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
