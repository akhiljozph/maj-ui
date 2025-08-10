import logo from "../../../../assets/icons/svg/solid/volume.svg";
import "../../assets/MajIcon.scss";

const MajVolumeIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="volume"
        />
    );
};

export default MajVolumeIcon;
