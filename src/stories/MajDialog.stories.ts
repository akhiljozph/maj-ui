import { Meta, StoryObj } from "@storybook/react";

import MajDialog from "../components/maj-dialog/MajDialog";

const meta = {
    title: 'Maj Dialog',
    component: MajDialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};