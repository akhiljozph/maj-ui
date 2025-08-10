import logo from "../../../../assets/icons/svg/light/arrow-up.svg";
import "../../assets/MajIcon.scss";

const MajArrowUpIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="arrow-up"
        />
    );
};

export default MajArrowUpIcon;
