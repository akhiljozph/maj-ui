interface CommonAccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    onChange?: (activeIndexes: number[]) => void;
}
interface AccordionItem {
    title: string;
    content: React.ReactNode;
    isOpen?: boolean;
}
export type { AccordionItem, CommonAccordionProps };
