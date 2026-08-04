import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders correctly', () => {
    render(<IconButton aria-label="Menu" />);
    const button = screen.getByRole('button', { name: 'Menu' });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<IconButton aria-label="Menu" onClick={handleClick} />);
    const button = screen.getByRole('button', { name: 'Menu' });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<IconButton aria-label="Menu" onClick={handleClick} isDisabled />);
    const button = screen.getByRole('button', { name: 'Menu' });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', () => {
    const handleClick = vi.fn();
    render(<IconButton aria-label="Menu" onClick={handleClick} isLoading />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders left and right icons', () => {
    render(
      <IconButton
        aria-label="Menu"
        leftIcon={<span data-testid="left">Left</span>}
        rightIcon={<span data-testid="right">Right</span>}
      />
    );
    expect(screen.getByTestId('left')).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
  });

  it('applies correct variant class', () => {
    render(<IconButton aria-label="Menu" variant="danger" data-testid="button" />);
    const button = screen.getByTestId('button');
    expect(button.className).toContain('danger');
  });

  it('applies correct size class', () => {
    render(<IconButton aria-label="Menu" size="lg" data-testid="button" />);
    const button = screen.getByTestId('button');
    expect(button.className).toContain('lg');
  });

  it('has correct ARIA attributes in disabled and loading states', () => {
    const { rerender } = render(<IconButton aria-label="Menu" isDisabled data-testid="button" />);
    let button = screen.getByTestId('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveAttribute('aria-busy', 'false');

    rerender(<IconButton aria-label="Menu" isLoading data-testid="button" />);
    button = screen.getByTestId('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveAttribute('aria-busy', 'true');
  });
});
