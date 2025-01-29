import logo from "../../../../assets/icons/svg/light/camera-viewfinder.svg";
import "../../assets/MajIcons.scss";

const MajCameraViewfinderIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="camera-viewfinder"
        />
    );
};

export default MajCameraViewfinderIcon;
