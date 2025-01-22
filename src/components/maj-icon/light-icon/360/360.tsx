import logo from "../../../../assets/icons/svg/light/360°.svg";
import "../../assets/MajIcon.scss";

const MajThreeSixtyDegree: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="360&deg"
        />
    );
};

export default MajThreeSixtyDegree;
