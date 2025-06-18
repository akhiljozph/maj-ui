import { Meta, StoryObj } from "@storybook/react";

import MajSwitch from "../../components/maj-switch/MajSwitch";

const meta: Meta<typeof MajSwitch> = {
    title: "MajUi/MajSwitch",
    component: MajSwitch,
};

export default meta;
type Story = StoryObj<typeof MajSwitch>;

export const Default: Story = {
    args: {},
};
