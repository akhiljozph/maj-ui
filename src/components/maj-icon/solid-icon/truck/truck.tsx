import logo from "../../../../assets/icons/svg/solid/truck.svg";
import "../../assets/MajIcon.scss";

const MajTruckIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="truck"
        />
    );
};

export default MajTruckIcon;
