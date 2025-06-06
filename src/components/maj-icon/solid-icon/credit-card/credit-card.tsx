import logo from "../../../../assets/icons/svg/solid/credit-card.svg";
import "../../assets/MajIcon.scss";

const MajCreditCardIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="credit-card"
        />
    );
};

export default MajCreditCardIcon;
