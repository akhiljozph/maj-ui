import logo from "../../../../assets/icons/svg/solid/location-dot.svg";
import "../../assets/MajIcon.scss";

const MajLocationDotIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="location-dot"
        />
    );
};

export default MajLocationDotIcon;
