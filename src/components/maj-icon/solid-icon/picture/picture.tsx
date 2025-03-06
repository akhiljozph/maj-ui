import logo from "../../../../assets/icons/svg/solid/picture.svg";
import "../../assets/MajIcon.scss";

const MajPictureIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="picture"
        />
    );
};

export default MajPictureIcon;
