import { Meta, StoryObj } from "@storybook/react";

import MajSwitch from "../components/maj-switch/MajSwitch";

const meta = {
    title: 'Maj Switch',
    component: MajSwitch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};