import logo from "../../../../assets/icons/svg/solid/camera-viewfinder.svg";
import "../../assets/MajIcon.scss";

const MajCameraViewfinderIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-icon"
            src={logo}
            alt="camera-viewfinder"
        />
    );
};

export default MajCameraViewfinderIcon;
