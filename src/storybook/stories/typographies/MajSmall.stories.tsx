import type { Meta, StoryObj } from "@storybook/react";

import { MajSmall } from "../../../components/maj-typography";

const meta: Meta<typeof MajSmall> = {
    title: "MajUi/MajTypography/MajSmall",
    component: MajSmall,
};

export default meta;
type Story = StoryObj<typeof MajSmall>;

export const SuperScript: Story = {
    args: {
        children: "Be happy! It's a small text boy.",
    },
};
