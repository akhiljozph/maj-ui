import type { Meta, StoryObj } from "@storybook/react";

import { MajDivider } from "../../components";

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

export const DividerOrientationStart: Story = {
    args: {
        stroke: "12",
        variant: "solid",
    },
};

export const DividerOrientationCenter: Story = {
    args: {
        stroke: "12",
        variant: "dotted",
    },
};

export const DividerOrientationEnd: Story = {
    args: {
        stroke: "12",
        variant: "dashed",
    },
};
