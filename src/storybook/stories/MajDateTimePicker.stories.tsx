import type { Meta, StoryObj } from "@storybook/react";

import MajDateTimePicker from "../../components/maj-date-time-picker/MajDateTimePicker";

const meta: Meta<typeof MajDateTimePicker> = {
    title: "MajUi/MajDateTimePicker",
    component: MajDateTimePicker,
};

export default meta;
type Story = StoryObj<typeof MajDateTimePicker>;

export const Primary: Story = {
    args: {},
};
