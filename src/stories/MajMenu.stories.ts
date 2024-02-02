import { Meta, StoryObj } from "@storybook/react";

import MajMenu from "../components/maj-menu/MajMenu";

const meta = {
    title: 'Maj Menu',
    component: MajMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};