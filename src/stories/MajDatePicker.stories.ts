import { Meta, StoryObj } from "@storybook/react";

import MajDatePicker from "../components/maj-date-picker/MajDatePicker";

const meta = {
    title: 'Maj Date Picker',
    component: MajDatePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};