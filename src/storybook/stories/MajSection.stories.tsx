import { Meta, StoryObj } from "@storybook/react";

import { MajSection } from "../../components";

const meta: Meta<typeof MajSection> = {
    title: "MajUi/MajSection",
    component: MajSection,
};

export default meta;
type Story = StoryObj<typeof MajSection>;

export const Default: Story = {
    args: {
        children: "MajSection component!",
    },
};
