import { Meta, StoryObj } from "@storybook/react";

import MajCheckbox from "../components/maj-checkbox/MajCheckbox";

const meta = {
    title: 'Maj Checkbox',
    component: MajCheckbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};