import { MajSnackbarProps } from "./MajSnackbar.types";

import "./MajCard.scss";

const MajSnackbar: React.FC<MajSnackbarProps> = (props: MajSnackbarProps) => {
    return <div>{props?.children}</div>;
};

export default MajSnackbar;
