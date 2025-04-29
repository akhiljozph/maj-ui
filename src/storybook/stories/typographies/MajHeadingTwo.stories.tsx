import type { Meta, StoryObj } from "@storybook/react";

import { MajH2 } from "../../../components/maj-typography";

const meta: Meta<typeof MajH2> = {
    title: "MajUi/MajTypography/MajH2",
    component: MajH2,
};

export default meta;
type Story = StoryObj<typeof MajH2>;

export const Bold: Story = {
    args: {
        children: "Keep calm! This is a heading 2.",
    },
};
