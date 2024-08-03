import React, { useEffect, useState } from "react";

import { MajButtonProps } from "./MajButton.types";
import "./MajButton.scss";

const MajButton: React.FC<MajButtonProps> = (props: MajButtonProps) => {

    const [className, setClassName] = useState<string>();

    useEffect(() => {
        classNameClassifier();
    }, [props.variant]);

    const classNameClassifier = () => {
        switch (props.variant) {
            case "primary":
                setClassName("btn-primary");
                break;
            case "secondary":
                setClassName("btn-secondary");
                break;
            case "tertiary":
                setClassName("btn-tertiary");
                break;
            case "quiet":
                setClassName("btn-quiet");
                break;
            default:
                setClassName("btn-primary");
                break;
        }
    }

    return (
        <>
            <button className={className}>{props.children}</button>
        </>
    )
};

export default MajButton;
