import logo from "../../../../assets/icons/svg/solid/print.svg";
import "../../assets/MajIcon.scss";

const MajPrintIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="print"
        />
    );
};

export default MajPrintIcon;
