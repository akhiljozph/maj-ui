import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import MajHeader from "../../components/maj-header/MajHeader";
import MajArticle from "../../components/maj-article/MajArticle";

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
