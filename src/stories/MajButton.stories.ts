import { Meta, StoryObj } from "@storybook/react";

import MajButton from "../components/maj-button/MajButton";

const meta = {
    title: 'Maj Button',
    component: MajButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// maj-basic
export const Basic: Story = {
    args: {
        children: 'Basic'
    }
};

// maj-default
export const Default: Story = {
    args: {
        children: 'Default'
    }
};

// maj-primary
export const Primary: Story = {
    args: {
        children: 'Primary'
    }
};

// maj-success
export const Success: Story = {
    args: {
        children: 'Success'
    }
};

// maj-info
export const Info: Story = {
    args: {
        children: 'Info'
    }
};

// maj-warning
export const Warning: Story = {
    args: {
        children: 'Warning'
    }
};

// maj-danger
export const Danger: Story = {
    args: {
        children: 'Danger'
    }
};

// maj-link
export const Link: Story = {
    args: {
        children: 'Link'
    }
};