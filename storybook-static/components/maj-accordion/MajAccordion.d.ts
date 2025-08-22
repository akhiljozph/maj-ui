import { default as React } from "../../../node_modules/react";
interface AccordionItem {
    title: string;
    content: React.ReactNode;
}
interface CommonAccordionProps {
    items: AccordionItem[];
    allowMultipleOpen?: boolean;
}
declare const CommonAccordion: React.FC<CommonAccordionProps>;
export default CommonAccordion;
