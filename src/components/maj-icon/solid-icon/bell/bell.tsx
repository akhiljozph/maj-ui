import logo from "../../../../assets/icons/svg/solid/bell.svg";
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
