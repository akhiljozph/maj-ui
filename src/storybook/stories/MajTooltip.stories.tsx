import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajTooltip } from "../../components";

const meta: Meta<typeof MajTooltip> = {
    title: "MajUi/MajTooltip",
    component: MajTooltip,
};

export default meta;
type Story = StoryObj<typeof MajTooltip>;

export const Tooltip: Story = {
    args: {
        message: "Tooltip message",
    },
};
