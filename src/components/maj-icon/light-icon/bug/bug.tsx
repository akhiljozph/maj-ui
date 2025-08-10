import logo from "../../../../assets/icons/svg/light/bug.svg";
import "../../assets/MajIcon.scss";

const MajBugIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="bug"
        />
    );
};

export default MajBugIcon;
