import { Meta, StoryObj } from "@storybook/react";

import MajTextarea from "../components/maj-textarea/MajTextarea";

const meta = {
    title: 'Maj Textarea',
    component: MajTextarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};