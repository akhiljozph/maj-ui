import React, { useState, useEffect } from "react";

import "./MajAccordion.scss";
import MajAccordionProps from "./MajAccordion.types";

const MajAccordion: React.FC<MajAccordionProps> = ({
    items,
    openItems,
    defaultOpenItems = [],
    allowMultipleOpen = false,
    onChange,
    className = "",
}) => {
    const isControlled = openItems !== undefined;
    const [internalOpenItems, setInternalOpenItems] = useState<number[]>(defaultOpenItems);

    useEffect(() => {
        if (isControlled && openItems) {
            setInternalOpenItems(openItems);
        }
    }, [openItems, isControlled]);

    const handleToggle = (index: number) => {
        let newOpenItems: number[];
        if (allowMultipleOpen) {
            newOpenItems = internalOpenItems.includes(index)
                ? internalOpenItems.filter((item) => item !== index)
                : [...internalOpenItems, index];
        } else {
            newOpenItems = internalOpenItems[0] === index ? [] : [index];
        }

        if (!isControlled) {
            setInternalOpenItems(newOpenItems);
        }
        onChange?.(newOpenItems);
    };

    return (
        <div className={`maj-accordion ${className}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`accordion-item${item.disabled ? " disabled" : ""}`}
                >
                    <button
                        className="accordion-title"
                        onClick={() => !item.disabled && handleToggle(index)}
                        aria-expanded={internalOpenItems.includes(index)}
                        disabled={item.disabled}
                        type="button"
                    >
                        {item.title}
                    </button>
                    <div
                        className={`accordion-content${internalOpenItems.includes(index) ? " open" : ""}`}
                        style={{ display: internalOpenItems.includes(index) ? "block" : "none" }}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MajAccordion;
