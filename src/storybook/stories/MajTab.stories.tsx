import { Meta, StoryObj } from "@storybook/react-vite";

import { MajTab } from "../../components";

const meta: Meta<typeof MajTab> = {
    title: "MajUi/MajTab",
    component: MajTab,
};

export default meta;
type Story = StoryObj<typeof MajTab>;

export const Default: Story = {
    args: {},
};
