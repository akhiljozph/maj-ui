import { Meta, StoryObj } from "@storybook/react";

import MajSlider from "../components/maj-slider/MajSlider";

const meta = {
    title: 'Maj Slider',
    component: MajSlider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};