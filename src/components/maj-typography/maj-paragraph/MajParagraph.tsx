import { MajParagraphProps } from "./MajParagraph.types";

const MajP = ({ children }: MajParagraphProps) => {
    return (
        <>
            <p>{children}</p>
        </>
    );
};

export default MajP;
