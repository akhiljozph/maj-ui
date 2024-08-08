import type { Meta, StoryObj } from "@storybook/react";

import MajButton from "../../components/maj-button/MajButton";

const meta: Meta<typeof MajButton> = {
  title: "MajUi/MajButton",
  component: MajButton,
};

export default meta;
type Story = StoryObj<typeof MajButton>;

export const Primary: Story = {
  args: {
    text: "Button",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
