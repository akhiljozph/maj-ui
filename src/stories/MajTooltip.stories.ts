import { Meta, StoryObj } from "@storybook/react";

import MajTooltip from "../components/maj-tooltip/MajTooltip";


const meta = {
    title: 'Maj Tooltip',
    component: MajTooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};