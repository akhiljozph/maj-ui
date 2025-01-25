import logo from "../../../../assets/icons/svg/solid/barcode-read.svg";
import "../../assets/MajIcon.scss";

const MajBarcodeReadIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="barcode-read"
        />
    );
};

export default MajBarcodeReadIcon;
