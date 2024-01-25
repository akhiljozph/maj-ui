import { Meta, StoryObj } from "@storybook/react";

import MajBadge from "../components/maj-badge/MajBadge";

const meta = {
    title: 'Maj Badge',
    component: MajBadge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};