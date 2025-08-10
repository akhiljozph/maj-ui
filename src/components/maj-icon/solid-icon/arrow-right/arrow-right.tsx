import logo from "../../../../assets/icons/svg/solid/arrow-right.svg";
import "../../assets/MajIcon.scss";

const MajArrowRightIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="arrow-right"
        />
    );
};

export default MajArrowRightIcon;
