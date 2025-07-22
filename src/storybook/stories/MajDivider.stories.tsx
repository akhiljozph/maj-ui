import type { Meta, StoryObj } from "@storybook/react";

import MajDivider from "../../components/maj-divider/MajDivider";

const meta: Meta<typeof MajDivider> = {
    title: "MajUi/MajDivider",
    component: MajDivider,
};

export default meta;
type Story = StoryObj<typeof MajDivider>;

export const SolidDivider: Story = {
    args: {
        stroke: "12",
        variant: "solid",
    },
};

export const DottedDivider: Story = {
    args: {
        stroke: "12",
        variant: "dotted",
    },
};

export const DashedDivider: Story = {
    args: {
        stroke: "12",
        variant: "dashed",
    },
};
