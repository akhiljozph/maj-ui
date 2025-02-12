import logo from "../../../../assets/icons/svg/solid/ellipsis.svg";
import "../../assets/MajIcon.scss";

const MajEllipsisIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="ellipsis"
        />
    );
};

export default MajEllipsisIcon;
