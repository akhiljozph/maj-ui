import logo from "../../../../assets/icons/svg/solid/gear.svg";
import "../../assets/MajIcon.scss";

const MajGearIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="gear"
        />
    );
};

export default MajGearIcon;
