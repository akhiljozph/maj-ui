import type { Meta, StoryObj } from "@storybook/react";

import MajSlider from "../../components/maj-slider/MajSlider";

const meta: Meta<typeof MajSlider> = {
    title: "MajUi/MajSlider",
    component: MajSlider,
};

export default meta;
type Story = StoryObj<typeof MajSlider>;

export const Primary: Story = {
    args: {
        min: 0,
        max: 100,
        label: "Volume",
        step: 5,
        value: 45,
    },
};
