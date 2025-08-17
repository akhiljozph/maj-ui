import type { Meta, StoryObj } from "@storybook/react";

import { MajProgressBar } from "../../components";

const meta: Meta<typeof MajProgressBar> = {
    title: "MajUi/MajProgressBar",
    component: MajProgressBar,
};

export default meta;
type Story = StoryObj<typeof MajProgressBar>;

export const HorizontalBar: Story = {
    args: {
        message: "progress-bar",
    },
};

export const VerticalBar: Story = {
    args: {
        message: "progress-bar",
    },
};
