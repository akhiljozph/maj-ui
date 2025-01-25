import logo from "../../../../assets/icons/svg/light/address-book.svg";
import "../../assets/MajIcon.scss";

const MajAddressBookIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="address-book"
        />
    );
};

export default MajAddressBookIcon;
