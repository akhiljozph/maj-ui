import type { Meta, StoryObj } from "@storybook/react";

import { MajH1 } from "../../../components/maj-typography";

const meta: Meta<typeof MajH1> = {
    title: "MajUi/MajTypography/MajH1",
    component: MajH1,
};

export default meta;
type Story = StoryObj<typeof MajH1>;

export const H1: Story = {
    args: {
        children: "Keep calm! This is a heading 1.",
    },
};
