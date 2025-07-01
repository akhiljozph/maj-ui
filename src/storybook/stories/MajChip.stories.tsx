import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MajChip from "../../components/maj-chip/MajChip";
import { MajP, MajSubScript } from "../../components/maj-typography";

const meta: Meta<typeof MajChip> = {
    title: "MajUi/MajChip",
    component: MajChip,
};

export default meta;
type Story = StoryObj<typeof MajChip>;

export const Accordion: Story = {
    args: {
        message: "9",
    },
};
