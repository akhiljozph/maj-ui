import { default as React } from '../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The visual style variant of the button.
     * @default 'primary'
     */
    variant?: ButtonVariant;
    /**
     * The size of the button controlling padding and font-size.
     * @default 'md'
     */
    size?: ButtonSize;
    /**
     * If true, shows a spinner loading indicator and disables user interaction.
     * @default false
     */
    isLoading?: boolean;
    /**
     * If true, disables user interaction.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * An optional icon to display to the left of the button text.
     */
    leftIcon?: React.ReactNode;
    /**
     * An optional icon to display to the right of the button text.
     */
    rightIcon?: React.ReactNode;
    /**
     * If true, the button will stretch to fill the width of its container.
     * @default false
     */
    fullWidth?: boolean;
}
