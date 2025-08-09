import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajSlider } from "../../components";

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
