import { Meta, StoryObj } from "@storybook/react";

import MajToggle from "../components/maj-toggle/MajToggle";

const meta = {
    title: 'Maj Toggle',
    component: MajToggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};