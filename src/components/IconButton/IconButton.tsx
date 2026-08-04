import { forwardRef } from 'react';
import { IconButtonProps } from './IconButton.types';
import styles from './IconButton.module.css';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isDisabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      type = 'button',
      disabled,
      ...props
    },
    ref
  ) => {
    const isButtonDisabled = isDisabled || disabled || isLoading;

    // Construct the list of class names based on design tokens and variants
    const classes = [
      styles.iconButton,
      styles[variant],
      styles[size],
      isLoading && styles.loading,
      isButtonDisabled && styles.disabled,
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={isButtonDisabled}
        aria-disabled={isButtonDisabled ? 'true' : 'false'}
        aria-busy={isLoading ? 'true' : 'false'}
        {...props}
      >
        {isLoading ? (
          <span className={styles.spinnerContainer} data-testid="icon-button-spinner">
            <svg
              className={styles.spinner}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className={styles.spinnerTrack}
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className={styles.spinnerHead}
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        ) : (
          <>
            {leftIcon && (
              <span className={styles.iconContainer} data-testid="left-icon-container">
                {leftIcon}
              </span>
            )}
            
            {children && <span className={styles.content}>{children}</span>}
            
            {rightIcon && (
              <span className={styles.iconContainer} data-testid="right-icon-container">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
