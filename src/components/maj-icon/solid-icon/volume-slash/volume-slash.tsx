import logo from "../../../../assets/icons/svg/solid/volume-slash.svg";
import "../../assets/MajIcon.scss";

const MajVolumeSlashIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="volume-slash"
        />
    );
};

export default MajVolumeSlashIcon;
