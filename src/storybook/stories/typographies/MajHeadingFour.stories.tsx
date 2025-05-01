import type { Meta, StoryObj } from "@storybook/react";

import { MajH4 } from "../../../components/maj-typography";

const meta: Meta<typeof MajH4> = {
    title: "MajUi/MajTypography/MajH4",
    component: MajH4,
};

export default meta;
type Story = StoryObj<typeof MajH4>;

export const Bold: Story = {
    args: {
        children: "Keep calm! This is a heading 3.",
    },
};
