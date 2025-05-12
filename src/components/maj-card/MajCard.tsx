import { MajCardProps } from "./MajCard.types";

import "./MajCard.scss";

const MajCard: React.FC<MajCardProps> = (props: MajCardProps) => {
    return <>{props?.children}</>;
};

export default MajCard;
