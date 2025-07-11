import type { Meta, StoryObj } from "@storybook/react";

import MajBadge from "../../components/maj-badge/MajBadge";

const meta: Meta<typeof MajBadge> = {
    title: "MajUi/MajBadge",
    component: MajBadge,
};

export default meta;
type Story = StoryObj<typeof MajBadge>;

export const Accordion: Story = {
    args: {
        message: "9",
    },
};
