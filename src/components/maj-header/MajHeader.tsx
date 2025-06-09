import { MajHeaderProps } from "./MajHeader.types";

const MajHeader = (props: MajHeaderProps) => {
    return <header>{props?.children}</header>;
};

export default MajHeader;
