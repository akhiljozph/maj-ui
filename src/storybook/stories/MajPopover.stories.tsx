import type { Meta, StoryObj } from "@storybook/react";

import { MajPopover } from "../../components";

const meta: Meta<typeof MajPopover> = {
    title: "MajUi/MajPopover",
    component: MajPopover,
};

export default meta;
type Story = StoryObj<typeof MajPopover>;

export const Popover: Story = {
    args: {
        message: "9",
    },
};
