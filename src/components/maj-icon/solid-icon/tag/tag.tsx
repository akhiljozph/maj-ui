import logo from "../../../../assets/icons/svg/solid/tag.svg";
import "../../assets/MajIcon.scss";

const MajTagIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="tag"
        />
    );
};

export default MajTagIcon;
