import type { Meta, StoryObj } from "@storybook/react";

import MajButton from "../components/maj-button/MajButton";

const meta = {
    title: "MajUI/MajButton",
    component: MajButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {  },
} satisfies Meta<typeof MajButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Button",
        variant: "primary"
    },
};
