import { Meta, StoryObj } from "@storybook/react";

import MajSpinner from "../components/maj-spinner/MajSpinner";

const meta = {
    title: 'Maj Spinner',
    component: MajSpinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};