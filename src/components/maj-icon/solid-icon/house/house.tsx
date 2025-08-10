import logo from "../../../../assets/icons/svg/solid/house.svg";
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
