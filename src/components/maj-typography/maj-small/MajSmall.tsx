import { MajSmallProps } from "./MajSmall.types";

const MajSmall = ({ children }: MajSmallProps) => {
    return (
        <>
            <small>{children}</small>
        </>
    );
};

export default MajSmall;
