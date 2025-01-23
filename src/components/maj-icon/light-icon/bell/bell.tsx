import logo from "../../../../assets/icons/svg/light/bell.svg";
import "../../assets/MajIcon.scss";

const MajBellIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="bell"
        />
    );
};

export default MajBellIcon;