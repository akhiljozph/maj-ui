import { Meta, StoryObj } from "@storybook/react";

import MajRating from "../components/maj-rating/MajRating";

const meta = {
    title: 'Maj Rating',
    component: MajRating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};