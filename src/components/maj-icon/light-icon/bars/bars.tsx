import logo from "../../../../assets/icons/svg/light/bars.svg";
import "../../assets/MajIcon.scss";

const MajBarsIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="bars"
        />
    );
};

export default MajBarsIcon;
