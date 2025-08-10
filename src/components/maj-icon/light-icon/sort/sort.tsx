import logo from "../../../../assets/icons/svg/light/sort.svg";
import "../../assets/MajIcon.scss";

const MajSortIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="sort"
        />
    );
};

export default MajSortIcon;
