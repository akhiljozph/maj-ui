import type { Meta, StoryObj } from "@storybook/react";

import MajDivider from "../../components/maj-divider/MajDivider";

const meta: Meta<typeof MajDivider> = {
    title: "MajUi/MajDivider",
    component: MajDivider,
};

export default meta;
type Story = StoryObj<typeof MajDivider>;

export const Divider: Story = {
    args: {
        stroke: "12",
    },
};
