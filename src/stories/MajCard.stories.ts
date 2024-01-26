import { Meta, StoryObj } from "@storybook/react";

import MajCard from "../components/maj-card/MajCard";

const meta = {
    title: 'Maj Card',
    component: MajCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};