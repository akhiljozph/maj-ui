import { Meta, StoryObj } from "@storybook/react";

import MajButton from "../components/maj-button/MajButton";

const meta = {
    title: 'Maj Button',
    component: MajButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};