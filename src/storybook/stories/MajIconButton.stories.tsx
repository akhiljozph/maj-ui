import type { Meta, StoryObj } from "@storybook/react";

import MajIconButton from "../../components/maj-icon-button/MajIconButton";

const meta: Meta<typeof MajIconButton> = {
      title: "MajUi/MajIconButton",
      component: MajIconButton,
};

export default meta;
type Story = StoryObj<typeof MajIconButton>;

export const Primary: Story = {
      args: {
      },
};