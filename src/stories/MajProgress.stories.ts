import { Meta, StoryObj } from "@storybook/react";

import MajProgress from "../components/maj-progress/MajProgress";

const meta = {
    title: 'Maj Progress',
    component: MajProgress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};