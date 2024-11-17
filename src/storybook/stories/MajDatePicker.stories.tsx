import type { Meta, StoryObj } from "@storybook/react";

import MajDatePicker from "../../components/maj-date-picker/MajDatePicker";

const meta: Meta<typeof MajDatePicker> = {
    title: "MajUi/MajDatePicker",
    component: MajDatePicker,
};

export default meta;
type Story = StoryObj<typeof MajDatePicker>;

export const DatePicker: Story = {
    args: {},
};

export const DateTimePicker: Story = {
    args: {},
};
