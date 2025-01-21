import logo from "../../../../assets/icons/svg/light/backward-step.svg";
import "../../assets/MajIcon.scss";

const MajBackwardStepIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="backward-step"
        />
    );
};

export default MajBackwardStepIcon;
