import type { Meta, StoryObj } from "@storybook/react";

import { MajP } from "../../../components/maj-typography";

const meta: Meta<typeof MajP> = {
    title: "MajUi/MajTypography/MajP",
    component: MajP,
};

export default meta;
type Story = StoryObj<typeof MajP>;

export const SuperScript: Story = {
    args: {
        children: "Be happy! It's a paragraph boy.",
    },
};
