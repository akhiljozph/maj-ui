import type { Meta, StoryObj } from "@storybook/react";

import { MajLoader } from "../../components";

const meta: Meta<typeof MajLoader> = {
    title: "MajUi/MajLoader",
    component: MajLoader,
};

export default meta;
type Story = StoryObj<typeof MajLoader>;

export const CircleLoader: Story = {
    args: {
        message: "9",
    },
};

export const LineLoader: Story = {
    args: {
        message: "9",
    },
};

export const SkeletonLoader: Story = {
    args: {
        message: "9",
    },
};

export const CustomLoader: Story = {
    args: {
        message: "9",
    },
};
