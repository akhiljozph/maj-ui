import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import { MajArticle } from "../../components";
import { MajP, MajSubScript } from "../../components";
import { MajSuperScript } from "../../components";

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
