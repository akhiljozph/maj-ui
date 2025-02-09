import logo from "../../../../assets/icons/svg/light/circle-minus.svg";
import "../../assets/MajIcon.scss";

const MajCircleMinusIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="circle-minus"
        />
    );
};

export default MajCircleMinusIcon;
