import logo from "../../../../assets/icons/svg/solid/plus.svg";
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
