import logo from "../../../../assets/icons/svg/light/pause.svg";
import "../../assets/MajIcon.scss";

const MajPauseIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="pause"
        />
    );
};

export default MajPauseIcon;
