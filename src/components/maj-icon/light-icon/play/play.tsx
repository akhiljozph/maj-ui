import logo from "../../../../assets/icons/svg/light/play.svg";
import "../../assets/MajIcon.scss";

const MajPlayIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="play"
        />
    );
};

export default MajPlayIcon;
