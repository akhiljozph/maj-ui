import logo from "../../../../assets/icons/svg/light/house.svg";
import "../../assets/MajIcon.scss";

const MajHouseIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="house"
        />
    );
};

export default MajHouseIcon;
