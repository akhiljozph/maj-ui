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
        children: 'Basic',
        basic: true,
    }
};

// maj-default
export const Default: Story = {
    args: {
        children: 'Default',
        default: true,
    }
};

// maj-primary
export const Primary: Story = {
    args: {
        children: 'Primary',
        primary: true,
    }
};

// maj-success
export const Success: Story = {
    args: {
        children: 'Success',
        success: true,
    }
};

// maj-info
export const Info: Story = {
    args: {
        children: 'Info',
        info: true,
    }
};

// maj-warning
export const Warning: Story = {
    args: {
        children: 'Warning',
        warning: true,
    }
};

// maj-danger
export const Danger: Story = {
    args: {
        children: 'Danger',
        danger: true,
    }
};

// maj-link
export const Link: Story = {
    args: {
        children: 'Link',
        link: true,
    }
};