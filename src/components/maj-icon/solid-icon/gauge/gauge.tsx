import logo from "../../../../assets/icons/svg/solid/gauge.svg";
import "../../assets/MajIcon.scss";

const MajGaugeIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="gauge"
        />
    );
};

export default MajGaugeIcon;
