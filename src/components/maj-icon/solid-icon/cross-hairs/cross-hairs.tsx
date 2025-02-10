import logo from "../../../../assets/icons/svg/solid/cross-hairs.svg";
import "../../assets/MajIcon.scss";

const MajCrossHairsIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="cross-hairs"
        />
    );
};

export default MajCrossHairsIcon;
