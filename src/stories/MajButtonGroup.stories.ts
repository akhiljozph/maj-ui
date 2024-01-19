import { Meta, StoryObj } from "@storybook/react";

import MajButtonGroup from "../components/maj-button-group/MajButtonGroup";

const meta = {
    title: 'Maj Button Group',
    component: MajButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};