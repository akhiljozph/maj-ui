import logo from "../../../../assets/icons/svg/solid/calendar-days.svg";
import "../../assets/MajIcon.scss";

const MajCalendarDaysIcon: React.FC<any> = () => {
    return (
        <img
            className="maj-img"
            src={logo}
            alt="calendar-days"
        />
    );
};

export default MajCalendarDaysIcon;
