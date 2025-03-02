import logo from "../../../../assets/icons/svg/light/minus.svg";
import "../../assets/MajIcon.scss";

const MajMinusIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="minus"
        />
    );
};

export default MajMinusIcon;
