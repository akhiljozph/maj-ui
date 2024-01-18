import { Meta, StoryObj } from "@storybook/react";

import MajInput from "../components/maj-input/MajInput";

const meta = {
    title: 'Maj Input',
    component: MajInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};