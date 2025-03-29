import logo from "../../../../assets/icons/svg/solid/user.svg";
import "../../assets/MajIcon.scss";

const MajUserIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="user"
        />
    );
};

export default MajUserIcon;
