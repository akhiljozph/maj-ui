import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajHeader } from "../../components";
import { MajArticle } from "../../components";

const meta: Meta<typeof MajHeader> = {
    title: "MajUi/MajHeader",
    component: MajHeader,
};

export default meta;
type Story = StoryObj<typeof MajHeader>;

export const Primary: Story = {
    args: {
        children: <MajArticle>Hello world!</MajArticle>,
    },
};
