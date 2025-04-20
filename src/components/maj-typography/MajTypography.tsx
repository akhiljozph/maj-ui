import { MajH5 } from "./maj-heading-five";
import { MajH4 } from "./maj-heading-four";
import { MajH1 } from "./maj-heading-one";
import { MajH6 } from "./maj-heading-six";
import { MajH3 } from "./maj-heading-three";
import { MajH2 } from "./maj-heading-two";
import { MajSubScript } from "./maj-sub-script";
import { MajSuperScript } from "./maj-super-script";

const MajTypography = () => {
    return (
        <>
            <MajH1>H1 typography works!</MajH1>
            <MajH2>H2 typography works!</MajH2>
            <MajH3>H3 typography works!</MajH3>
            <MajH4>H4 typography works!</MajH4>
            <MajH5>H5 typography works!</MajH5>
            <MajH6>H6 typography works!</MajH6>
            <MajSubScript>Subscript typography works!</MajSubScript>
            <MajSuperScript>Superscript typography works!</MajSuperScript>
            <a>Link typography works!</a>
            <b>Bold typography works!</b>
        </>
    );
};

export default MajTypography;
