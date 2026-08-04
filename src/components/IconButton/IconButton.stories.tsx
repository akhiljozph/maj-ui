import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
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
    isLoading: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const Default: Story = {
  args: {
    children: <SampleIcon />,
    'aria-label': 'Right Arrow',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <IconButton variant="primary" aria-label="Primary"><SampleIcon /></IconButton>
      <IconButton variant="secondary" aria-label="Secondary"><SampleIcon /></IconButton>
      <IconButton variant="ghost" aria-label="Ghost"><SampleIcon /></IconButton>
      <IconButton variant="danger" aria-label="Danger"><SampleIcon /></IconButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton size="sm" aria-label="Small"><SampleIcon /></IconButton>
      <IconButton size="md" aria-label="Medium"><SampleIcon /></IconButton>
      <IconButton size="lg" aria-label="Large"><SampleIcon /></IconButton>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: <SampleIcon />,
    'aria-label': 'Loading Arrow',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: <SampleIcon />,
    'aria-label': 'Disabled Arrow',
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <SampleIcon />,
    children: 'Action',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <SampleIcon />,
    children: 'Action',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: <SampleIcon />,
    'aria-label': 'Full Width Arrow',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
