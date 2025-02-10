import logo from "../../../../assets/icons/svg/solid/comment.svg";
import "../../assets/MajIcon.scss";

const MajCommentIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="comment"
        />
    );
};

export default MajCommentIcon;
