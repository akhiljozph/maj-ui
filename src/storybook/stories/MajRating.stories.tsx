import type { Meta, StoryObj } from "@storybook/react";

import MajRating from "../../components/maj-rating/MajRating";

const meta: Meta<typeof MajRating> = {
    title: "MajUi/MajRating",
    component: MajRating,
};

export default meta;
type Story = StoryObj<typeof MajRating>;

export const Primary: Story = {
    args: {},
};
