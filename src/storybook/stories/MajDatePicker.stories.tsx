import type { Meta, StoryObj } from "@storybook/react";

import { MajDatePicker } from "../../components";

const meta: Meta<typeof MajDatePicker> = {
    title: "MajUi/MajDatePicker",
    component: MajDatePicker,
};

export default meta;
type Story = StoryObj<typeof MajDatePicker>;

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
