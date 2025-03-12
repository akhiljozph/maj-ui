import logo from "../../../../assets/icons/svg/light/shuffle.svg";
import "../../assets/MajIcon.scss";

const MajShuffleIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="shuffle"
        />
    );
};

export default MajShuffleIcon;
