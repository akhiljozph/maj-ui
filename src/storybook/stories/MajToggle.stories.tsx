import type { Meta, StoryObj } from "@storybook/react";

import MajToggle from "../../components/maj-toggle/MajToggle";

const meta: Meta<typeof MajToggle> = {
    title: "MajUi/MajToggle",
    component: MajToggle,
};

export default meta;
type Story = StoryObj<typeof MajToggle>;

export const Primary: Story = {
    args: {
        toggleOneLabel: "Yearly",
        toggleTwoLabel: "Monthly",
    },
};
