import logo from "../../../../assets/icons/svg/light/trash-can.svg";
import "../../assets/MajIcon.scss";

const MajTrashCanIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="trash-can"
        />
    );
};

export default MajTrashCanIcon;
