import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import MajAvatar from "../components/maj-avatar/MajAvatar";

const meta = {
  title: "MajUI/MajAvatar",
  component: MajAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof MajAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
