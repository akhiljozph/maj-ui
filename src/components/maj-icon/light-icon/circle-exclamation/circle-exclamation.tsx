import logo from "../../../../assets/icons/svg/light/circle-exclamation.svg";
import "../../assets/MajIcon.scss";

const MajCircleExclamationIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="circle-exclamation"
        />
    );
};

export default MajCircleExclamationIcon;
