import logo from "../../../../assets/icons/svg/light/circle-check.svg";
import "../../assets/MajIcon.scss";

const MajCircleCheckIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="circle-check"
        />
    );
};

export default MajCircleCheckIcon;
