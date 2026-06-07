import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Mail, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isLoading: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button Text',
    variant: 'primary',
    size: 'md',
    isLoading: false,
    isDisabled: false,
    fullWidth: false,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="danger">Danger</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
    children: 'Loading Button',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
    children: 'Disabled Button',
  },
};

export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: <Mail size={16} />,
    children: 'Email Us',
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    rightIcon: <ArrowRight size={16} />,
    children: 'Get Started',
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
    children: 'Full Width Button',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', padding: '1rem', border: '1px dashed #ccc' }}>
        <Story />
      </div>
    ),
  ],
};
