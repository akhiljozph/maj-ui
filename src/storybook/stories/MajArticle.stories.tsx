import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MajArticle from "../../components/maj-article/MajArticle";
import { MajP, MajSubScript } from "../../components/maj-typography";
import { MajSuperScript } from "../../components/maj-typography";

const meta: Meta<typeof MajArticle> = {
    title: "MajUi/MajArticle",
    component: MajArticle,
};

export default meta;
type Story = StoryObj<typeof MajArticle>;

export const ArticleWithSubScript: Story = {
    args: {
        children: (
            <MajP>
                Maj SubScript Component
                <MajSubScript>This is an example of subscript tag.</MajSubScript>
            </MajP>
        ),
    },
};

export const ArticleWithSuperScript: Story = {
    args: {
        children: (
            <MajP>
                Maj SubScript Component
                <MajSuperScript>This is an example of subscript tag.</MajSuperScript>
            </MajP>
        ),
    },
};
