import type { Meta, StoryObj } from "@storybook/react";

import { MajH3 } from "../../../components/maj-typography";

const meta: Meta<typeof MajH3> = {
    title: "MajUi/MajTypography/MajH3",
    component: MajH3,
};

export default meta;
type Story = StoryObj<typeof MajH3>;

export const H3: Story = {
    args: {
        children: "Keep calm! This is a heading 3.",
    },
};
