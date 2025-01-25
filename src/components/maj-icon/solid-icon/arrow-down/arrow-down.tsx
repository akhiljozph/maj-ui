import logo from "../../../../assets/icons/svg/solid/arrow-down.svg";
import "../../assets/MajIcon.scss";

const MajArrowDownIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="arrow-down"
        />
    );
};

export default MajArrowDownIcon;
