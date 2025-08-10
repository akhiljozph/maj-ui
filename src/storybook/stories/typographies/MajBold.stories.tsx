import type { Meta, StoryObj } from "@storybook/react";

import { MajBold } from "../../../components/maj-typography";

const meta: Meta<typeof MajBold> = {
    title: "MajUi/MajTypography/MajBold",
    component: MajBold,
};

export default meta;
type Story = StoryObj<typeof MajBold>;

export const Bold: Story = {
    args: {
        children: "Keep calm! This is a bold text.",
    },
};
