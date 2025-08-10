import logo from "../../../../assets/icons/svg/light/cart-shopping.svg";
import "../../assets/MajIcon.scss";

const MajCartShoppingIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="cart-shopping"
        />
    );
};

export default MajCartShoppingIcon;
