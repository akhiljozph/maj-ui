import logo from "../../../../assets/icons/svg/light/file-arrow-up.svg";
import "../../assets/MajIcon.scss";

const MajFileArrowUpIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="file-arrow-up"
        />
    );
};

export default MajFileArrowUpIcon;
