import { Meta, StoryObj } from "@storybook/react";

import MajRadioGroup from "../components/maj-radio-group/MajRadioGroup";

const meta = {
    title: 'Maj Radio Group',
    component: MajRadioGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};