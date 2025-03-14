import logo from "../../../../assets/icons/svg/solid/circle-user.svg";
import "../../assets/MajIcon.scss";

const MajCircleUserIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="circle-user"
        />
    );
};

export default MajCircleUserIcon;
