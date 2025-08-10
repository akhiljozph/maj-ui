import logo from "../../../../assets/icons/svg/solid/upload.svg";
import "../../assets/MajIcon.scss";

const MajUploadIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="upload"
        />
    );
};

export default MajUploadIcon;
