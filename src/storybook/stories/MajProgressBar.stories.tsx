import type { Meta, StoryObj } from "@storybook/react";

import MajProgressBar from "../../components/maj-progress-bar/MajProgressBar";

const meta: Meta<typeof MajProgressBar> = {
    title: "MajUi/MajProgressBar",
    component: MajProgressBar,
};

export default meta;
type Story = StoryObj<typeof MajProgressBar>;

export const Primary: Story = {
    args: {
        message: "progress-bar",
    },
};
