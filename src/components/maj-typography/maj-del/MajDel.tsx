import { MajDelProps } from "./MajDel.types";

import "./MajDel.scss";

const MajDel = (props: MajDelProps) => {
    return <del>{props.children}</del>;
};

export default MajDel;
