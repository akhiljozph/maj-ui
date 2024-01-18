import { Meta, StoryObj } from "@storybook/react";

import MajRadio from "../components/maj-radio/MajRadio";

const meta = {
    title: 'Maj Radio',
    component: MajRadio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};