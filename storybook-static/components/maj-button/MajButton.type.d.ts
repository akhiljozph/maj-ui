import { MouseEventHandler, ReactNode } from "../../../node_modules/react";
type MajButtonVariants =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
type MajButtonSizes = "small" | "medium" | "large";
type MajButtonTypes = "button" | "submit" | "reset";
export type MajButtonProps = {
    children?: ReactNode;
    variant?: MajButtonVariants;
    disabled?: boolean;
    size?: MajButtonSizes;
    type?: MajButtonTypes;
    outline?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export {};
