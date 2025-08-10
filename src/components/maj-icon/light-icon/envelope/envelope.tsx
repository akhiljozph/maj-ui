import logo from "../../../../assets/icons/svg/light/envelope.svg";
import "../../assets/MajIcon.scss";

const MajEnvelopeIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="envelope"
        />
    );
};

export default MajEnvelopeIcon;
