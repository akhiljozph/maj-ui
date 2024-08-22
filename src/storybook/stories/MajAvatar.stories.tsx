import type { Meta, StoryObj } from "@storybook/react";

import MajAvatar from "../../components/maj-avatar/MajAvatar";

const meta: Meta<typeof MajAvatar> = {
  title: "MajUi/MajAvatar",
  component: MajAvatar,
};

export default meta;
type Story = StoryObj<typeof MajAvatar>;

export const Icon: Story = {
  args: {
    avatarType: "icon"
  },
};

export const Image: Story = {
  args: {
    avatarType: "image",
    avatarALT: "img"
  },
};

export const Initial: Story = {
  args: {
    avatarType: "initial",
    initial: "AJ",
  },
};
