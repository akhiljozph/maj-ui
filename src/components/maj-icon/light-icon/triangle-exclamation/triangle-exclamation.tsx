import logo from "../../../../assets/icons/svg/light/triangle-exclamation.svg";
import "../../assets/MajIcon.scss";

const MajTriangleExclamationIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="triangle-exclamation"
        />
    );
};

export default MajTriangleExclamationIcon;
