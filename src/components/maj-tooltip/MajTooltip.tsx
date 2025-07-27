import { MajTooltipProps } from "./MajTooltip.types";

import "./MajTooltip.scss";

const MajTooltip = (props: MajTooltipProps) => {
    return <>{props?.message}</>;
};

export default MajTooltip;
