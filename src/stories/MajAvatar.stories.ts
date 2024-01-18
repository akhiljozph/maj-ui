import { Meta, StoryObj } from "@storybook/react";

import MajAvatar from "../components/maj-avatar/MajAvatar";

const meta = {
    title: 'Maj Avatar',
    component: MajAvatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};