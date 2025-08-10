import logo from "../../../../assets/icons/svg/solid/thumbs-down.svg";
import "../../assets/MajIcon.scss";

const MajThumbsDownIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="thumbs-down"
        />
    );
};

export default MajThumbsDownIcon;
