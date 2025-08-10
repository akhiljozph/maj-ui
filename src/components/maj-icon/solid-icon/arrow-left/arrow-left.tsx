import logo from "../../../../assets/icons/svg/solid/arrow-left.svg";
import "../../assets/MajIcon.scss";

const MajArrowLeftIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="arrow-left"
        />
    );
};

export default MajArrowLeftIcon;
