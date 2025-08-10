import logo from "../../../../assets/icons/svg/light/circle-x-mark.svg";
import "../../assets/MajIcon.scss";

const MajCircleXMarkIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="circle-x-mark"
        />
    );
};

export default MajCircleXMarkIcon;
