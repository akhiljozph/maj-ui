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
                setClassName("btn btn-primary");
                break;
            case "secondary":
                setClassName("btn btn-secondary");
                break;
            case "tertiary":
                setClassName("btn btn-tertiary");
                break;
            case "quiet":
                setClassName("btn btn-quiet");
                break;
            default:
                setClassName("btn btn-primary");
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
