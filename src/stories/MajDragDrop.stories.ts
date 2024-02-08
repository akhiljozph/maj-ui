import { Meta, StoryObj } from "@storybook/react";

import MajDragDrop from "../components/maj-drag-drop/MajDragDrop";

const meta = {
    title: 'Maj Drag & Drop',
    component: MajDragDrop,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajDragDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};