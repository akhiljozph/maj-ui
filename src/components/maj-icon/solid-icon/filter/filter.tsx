import logo from "../../../../assets/icons/svg/solid/filter.svg";
import "../../MajIcon.scss";

const MajFilterIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="filter"
        />
    );
};

export default MajFilterIcon;
