import { MajDividerProps } from "./MajDivider.types";

import "./MajDivider.scss";

const MajDivider = (props: MajDividerProps) => {
    let classnames: string;

    switch (props?.variant) {
        case "dashed":
            classnames = "maj-divider dashed-divider";
            break;
        case "dotted":
            classnames = "maj-divider dotted-divider";
            break;
        case "solid":
            classnames = "maj-divider solid-divider";
            break;
        default:
            classnames = "maj-divider solid-divider";
            break;
    }
    return <div className={classnames}></div>;
};

export default MajDivider;
