import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajLink } from "../../../components/maj-typography";

const meta: Meta<typeof MajLink> = {
    title: "MajUi/MajTypography/MajLink",
    component: MajLink,
};

export default meta;
type Story = StoryObj<typeof MajLink>;

export const Link: Story = {
    args: {
        children: "Don't panic! It's a simple link.",
    },
};
