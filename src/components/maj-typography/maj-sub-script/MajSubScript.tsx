import { MajSubScriptProps } from "./MajSubScript.types";

const MajSubScript = ({ children }: MajSubScriptProps) => {
    return (
        <>
            <sub>{children}</sub>
        </>
    );
};

export default MajSubScript;
