import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajToggle } from "../../components";

const meta: Meta<typeof MajToggle> = {
    title: "MajUi/MajToggle",
    component: MajToggle,
};

export default meta;
type Story = StoryObj<typeof MajToggle>;

export const ToggleWithLabel: Story = {
    args: {
        toggleOneLabel: "Yearly",
        toggleTwoLabel: "Monthly",
    },
};
