import type { Meta, StoryObj } from "@storybook/react";

import { MajDateTimePicker } from "../../components";

const meta: Meta<typeof MajDateTimePicker> = {
    title: "MajUi/MajDateTimePicker",
    component: MajDateTimePicker,
};

export default meta;
type Story = StoryObj<typeof MajDateTimePicker>;

export const Default: Story = {
    args: {},
};

export const PreviousDatesDisabled: Story = {
    args: {
        minimumValue: new Date().toISOString().slice(0, 16),
    },
};

export const FutureDatesDisabled: Story = {
    args: {
        maximumValue: new Date().toISOString().slice(0, 16),
    },
};
