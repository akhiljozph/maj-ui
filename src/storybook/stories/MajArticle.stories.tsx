import type { Meta, StoryObj } from "@storybook/react";

import MajArticle from "../../components/maj-article/MajArticle";

const meta: Meta<typeof MajArticle> = {
    title: "MajUi/MajTypography/MajArticle",
    component: MajArticle,
};

export default meta;
type Story = StoryObj<typeof MajArticle>;

export const Article: Story = {
    args: {
        children: "Don't panic! It's a simple article.",
    },
};
