import logo from "../../../../assets/icons/svg/light/magnifying-glass.svg";
import "../../assets/MajIcon.scss";

const MajMagnifyingGlassIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="magnifying-glass"
        />
    );
};

export default MajMagnifyingGlassIcon;
