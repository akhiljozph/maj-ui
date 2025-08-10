import logo from "../../../../assets/icons/svg/solid/gears.svg";
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
