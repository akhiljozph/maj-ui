import { MajTooltipProps } from "./MajTooltip.types";

import "./MajTooltip.scss";

const MajTooltip = (props: MajTooltipProps) => {
    return <span>{props?.message}</span>;
};

export default MajTooltip;
