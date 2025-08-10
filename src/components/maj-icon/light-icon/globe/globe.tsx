import logo from "../../../../assets/icons/svg/light/globe.svg";
import "../../assets/MajIcon.scss";

const MajGlobeIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="globe"
        />
    );
};

export default MajGlobeIcon;
