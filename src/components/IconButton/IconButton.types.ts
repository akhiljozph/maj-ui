import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';

  /**
   * Size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * If true, shows a spinner and disables interaction
   * @default false
   */
  isLoading?: boolean;

  /**
   * If true, disables the button
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Left icon node
   */
  leftIcon?: ReactNode;

  /**
   * Right icon node
   */
  rightIcon?: ReactNode;

  /**
   * If true, stretches the button to its container's width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Standard click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
