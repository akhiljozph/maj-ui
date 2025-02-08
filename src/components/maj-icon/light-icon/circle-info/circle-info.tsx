import logo from "../../../../assets/icons/svg/light/circle-info.svg";
import "../../assets/MajIcon.scss";

const MajCircleInfoIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="circle-info"
        />
    );
};

export default MajCircleInfoIcon;
