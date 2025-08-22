import React, { useState } from "react";
import "./MajAccordion.scss";

interface AccordionItem {
    title: string;
    content: React.ReactNode;
}

interface CommonAccordionProps {
    items: AccordionItem[];
    allowMultipleOpen?: boolean;
}

const CommonAccordion: React.FC<CommonAccordionProps> = ({ items, allowMultipleOpen = false }) => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        if (allowMultipleOpen) {
            setOpenItems((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
            );
        } else {
            setOpenItems((prev) => (prev[0] === index ? [] : [index]));
        }
    };

    return (
        <div className="common-accordion">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="accordion-item"
                >
                    <div
                        className="accordion-title"
                        onClick={() => toggleItem(index)}
                    >
                        {item.title}
                    </div>
                    {openItems.includes(index) && (
                        <div className="accordion-content">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CommonAccordion;
