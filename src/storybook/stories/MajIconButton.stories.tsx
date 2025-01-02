import type { Meta, StoryObj } from "@storybook/react";

import MajIconButton from "../../components/maj-icon-button/MajIconButton";

const meta: Meta<typeof MajIconButton> = {
    title: "MajUi/MajIconButton",
    component: MajIconButton,
    argTypes: {
        shade: {
            options: ["Light", "Solid"],
            control: { type: "radio" },
        },
        variant: {
            options: ["360", "address-book"],
            control: { type: "select" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof MajIconButton>;

export const Primary: Story = {
    args: {
        shade: "Light",
        variant: "360",
    },
};
