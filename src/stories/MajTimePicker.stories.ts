import { Meta, StoryObj } from "@storybook/react";

import MajTimePicker from "../components/maj-time-picker/MajTimePicker";

const meta = {
    title: 'Maj Time Picker',
    component: MajTimePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};