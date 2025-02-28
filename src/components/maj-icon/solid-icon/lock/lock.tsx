import logo from "../../../../assets/icons/svg/light/lock.svg";
import "../../assets/MajIcon.scss";

const MajLockIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="lock"
        />
    );
};

export default MajLockIcon;
