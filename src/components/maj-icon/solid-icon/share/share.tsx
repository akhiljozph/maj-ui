import logo from "../../../../assets/icons/svg/solid/share.svg";
import "../../assets/MajIcon.scss";

const MajShareIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="share"
        />
    );
};

export default MajShareIcon;
