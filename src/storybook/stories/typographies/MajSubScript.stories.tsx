import type { Meta, StoryObj } from "@storybook/react";

import { MajSubScript } from "../../../components/maj-typography";

const meta: Meta<typeof MajSubScript> = {
    title: "MajUi/MajTypography/MajSubScript",
    component: MajSubScript,
};

export default meta;
type Story = StoryObj<typeof MajSubScript>;

export const SubScript: Story = {
    args: {
        children: "Be happy! It's a subscript boy.",
    },
};
