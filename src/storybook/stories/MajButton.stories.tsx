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
    onClick: () => console.log("The primary button has been clicked!"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
    variant: "secondary",
    disabled: false,
    size: "small",
    onClick: () => console.log("The secondary button has been clicked!"),
  },
};

export const Success: Story = {
  args: {
    text: "Success",
    variant: "success",
    disabled: false,
    size: "small",
    onClick: () => console.log("The success button has been clicked!"),
  },
};

export const Danger: Story = {
  args: {
    text: "Danger",
    variant: "danger",
    disabled: false,
    size: "small",
    onClick: () => console.log("The danger button has been clicked!"),
  },
};

export const Warning: Story = {
  args: {
    text: "Warning",
    variant: "warning",
    disabled: false,
    size: "small",
    onClick: () => console.log("The warning button has been clicked!"),
  },
};

export const Info: Story = {
  args: {
    text: "Info",
    variant: "info",
    disabled: false,
    size: "small",
    onClick: () => console.log("The info button has been clicked!"),
  },
};

export const Light: Story = {
  args: {
    text: "Light",
    variant: "light",
    disabled: false,
    size: "small",
    onClick: () => console.log("The light button has been clicked!"),
  },
};

export const Dark: Story = {
  args: {
    text: "Dark",
    variant: "dark",
    disabled: false,
    size: "small",
    onClick: () => console.log("The dark button has been clicked!"),
  },
};

export const Link: Story = {
  args: {
    text: "Link",
    variant: "link",
    disabled: false,
    size: "small",
    onClick: () => console.log("The link button has been clicked!"),
  },
};
