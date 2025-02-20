import logo from "../../../../assets/icons/svg/solid/file-invoice.svg";
import "../../assets/majIcon.scss";

const MajFileInvoiceIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="file-invoice"
        />
    );
};

export default MajFileInvoiceIcon;
