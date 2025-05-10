import type { Meta, StoryObj } from "@storybook/react";

import { MajH6 } from "../../../components/maj-typography";

const meta: Meta<typeof MajH6> = {
    title: "MajUi/MajTypography/MajH6",
    component: MajH6,
};

export default meta;
type Story = StoryObj<typeof MajH6>;

export const H6: Story = {
    args: {
        children: "Don't panic! This is a heading 6.",
    },
};
