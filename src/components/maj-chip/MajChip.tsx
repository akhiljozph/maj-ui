import { MajChipProps } from "./MajChip.type";

import "./MajChip.scss";

const MajChip = (props: MajChipProps) => {
    return <span>{props?.message}</span>;
};

export default MajChip;
