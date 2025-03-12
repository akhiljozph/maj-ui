import logo from "../../../../assets/icons/svg/solid/shuffle.svg";
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
