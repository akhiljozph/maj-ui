import logo from "../../../../assets/icons/svg/solid/envelope.svg";
import "../../MajIcon.scss";

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
