import { MajSnackbarProps } from "./MajSnackbar.types";

import "./MajSnackbar.scss";

const MajSnackbar: React.FC<MajSnackbarProps> = (props: MajSnackbarProps) => {
    return <div>{props?.children}</div>;
};

export default MajSnackbar;
