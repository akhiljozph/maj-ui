import type { Meta, StoryObj } from "@storybook/react";

import MajLoader from "../../components/maj-loader/MajLoader";

const meta: Meta<typeof MajLoader> = {
    title: "MajUi/MajLoader",
    component: MajLoader,
};

export default meta;
type Story = StoryObj<typeof MajLoader>;

export const Loader: Story = {
    args: {
        message: "9",
    },
};
