import { MajBadgeProps } from "./MajBadge.type";

import "./MajBadge.scss";

const MajBadge = (props: MajBadgeProps) => {
    return <span>{props?.message}</span>;
};

export default MajBadge;
