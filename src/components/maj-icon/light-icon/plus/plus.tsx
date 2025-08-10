import logo from "../../../../assets/icons/svg/light/plus.svg";
import "../../assets/MajIcon.scss";

const MajPlusIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="plus"
        />
    );
};

export default MajPlusIcon;
