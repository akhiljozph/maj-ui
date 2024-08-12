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
    text: "Primary",
    variant: "primary",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
    variant: "secondary",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Success: Story = {
  args: {
    text: "Success",
    variant: "success",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Danger: Story = {
  args: {
    text: "Danger",
    variant: "danger",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Warning: Story = {
  args: {
    text: "Warning",
    variant: "warning",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Info: Story = {
  args: {
    text: "Info",
    variant: "info",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Light: Story = {
  args: {
    text: "Light",
    variant: "light",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Dark: Story = {
  args: {
    text: "Dark",
    variant: "dark",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Link: Story = {
  args: {
    text: "Link",
    variant: "link",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
