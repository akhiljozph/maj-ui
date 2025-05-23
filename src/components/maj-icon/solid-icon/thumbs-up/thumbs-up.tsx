import logo from "../../../../assets/icons/svg/solid/thumbs-up.svg";
import "../../assets/MajIcon.scss";

const MajThumbsUpIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="thumbs-up"
        />
    );
};

export default MajThumbsUpIcon;
