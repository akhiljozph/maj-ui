import { Meta, StoryObj } from "@storybook/react";

import MajCarousel from "../components/maj-carousel/MajCarousel";

const meta = {
    title: 'Maj Carousel',
    component: MajCarousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};