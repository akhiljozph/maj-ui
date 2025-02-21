import logo from "../../../../assets/icons/svg/light/gears.svg";
import "../../assets/MajIcon.scss";

const MajGearsIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="gears"
        />
    );
};

export default MajGearsIcon;
