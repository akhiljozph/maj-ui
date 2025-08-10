import logo from "../../../../assets/icons/svg/solid/pencil.svg";
import "../../assets/MajIcon.scss";

const MajPencilIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="pencil"
        />
    );
};

export default MajPencilIcon;
