import { MajHeaderProps } from "./MajHeader.types";

import "./MajHeader.scss";

const MajHeader = (props: MajHeaderProps) => {
    return <header>{props?.children}</header>;
};

export default MajHeader;
