import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajRadioGroup } from "../../components";

const meta: Meta<typeof MajRadioGroup> = {
    title: "MajUi/MajRadioGroup",
    component: MajRadioGroup,
};

export default meta;
type Story = StoryObj<typeof MajRadioGroup>;

export const Horizontal: Story = {
    args: {
        name: "primary",
        radioLists: ["2 Wheeler", "4 Wheeler", "6 Wheeler"],
        alignment: "horizontal",
    },
};

export const Vertical: Story = {
    args: {
        name: "primary",
        radioLists: ["2 Wheeler", "4 Wheeler", "6 Wheeler"],
        alignment: "vertical",
    },
};
