import { Meta, StoryObj } from "@storybook/react";

import MajStepper from "../components/maj-stepper/MajStepper";

const meta = {
    title: 'Maj Stepper',
    component: MajStepper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};