export interface AccordionItem {
    title: string;
    content: React.ReactNode;
    disabled?: boolean;
}
export interface MajAccordionProps {
    items: AccordionItem[];
    openItems?: number[];
    defaultOpenItems?: number[];
    allowMultipleOpen?: boolean;
    onChange?: (openItems: number[]) => void;
    className?: string;
}
export default MajAccordionProps;
