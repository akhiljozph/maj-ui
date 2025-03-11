import logo from "../../../../assets/icons/svg/light/share.svg";
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
