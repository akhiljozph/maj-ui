import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajProgressBar } from "../../components";

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
