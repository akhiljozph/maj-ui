import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { MajCard } from "../../components";

const meta: Meta<typeof MajCard> = {
    title: "MajUi/MajCard",
    component: MajCard,
};

export default meta;
type Story = StoryObj<typeof MajCard>;

export const ToggleWithLabel: Story = {
    args: {
        children: <div>Card</div>,
    },
};
