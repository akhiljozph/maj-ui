import type { Meta, StoryObj } from "@storybook/react";

import { MajButtonGroup } from "../../components";

const meta: Meta<typeof MajButtonGroup> = {
    title: "MajUi/MajButtonGroup",
    component: MajButtonGroup,
};

export default meta;
type Story = StoryObj<typeof MajButtonGroup>;

export const Primary: Story = {
    args: {},
};
