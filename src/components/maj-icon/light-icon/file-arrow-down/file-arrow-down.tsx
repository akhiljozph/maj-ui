import logo from "../../../../assets/icons/svg/light/file-arrow-down.svg";
import "../../assets/majIcon.scss";

const MajFileArrowDownIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="file-arrow-down"
        />
    );
};

export default MajFileArrowDownIcon;
