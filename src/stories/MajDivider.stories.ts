import { Meta, StoryObj } from "@storybook/react";

import MajDivider from "../components/maj-divider/MajDivider";

const meta = {
    title: 'Maj Divider',
    component: MajDivider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};