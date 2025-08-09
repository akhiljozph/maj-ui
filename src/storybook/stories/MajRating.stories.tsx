import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajRating } from "../../components";

const meta: Meta<typeof MajRating> = {
    title: "MajUi/MajRating",
    component: MajRating,
};

export default meta;
type Story = StoryObj<typeof MajRating>;

export const Primary: Story = {
    args: {},
};
