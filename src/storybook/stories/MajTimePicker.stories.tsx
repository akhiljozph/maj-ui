import type { Meta, StoryObj } from "@storybook/react";

import MajTimePicker from "../../components/maj-time-picker/MajTimePicker";

const meta: Meta<typeof MajTimePicker> = {
    title: "MajUi/MajTimePicker",
    component: MajTimePicker,
};

export default meta;
type Story = StoryObj<typeof MajTimePicker>;

export const Primary: Story = {
    args: {},
};

export const secondary: Story = {
    args: {},
};
