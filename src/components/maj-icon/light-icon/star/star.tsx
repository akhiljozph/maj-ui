import logo from "../../../../assets/icons/svg/light/star.svg";
import "../../assets/MajIcon.scss";

const MajStarIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="star"
        />
    );
};

export default MajStarIcon;
