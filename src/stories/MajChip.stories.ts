import { Meta, StoryObj } from "@storybook/react";

import MajChip from "../components/maj-chip/MajChip";

const meta = {
    title: 'Maj Chip',
    component: MajChip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};