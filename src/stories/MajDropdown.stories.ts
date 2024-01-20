import { Meta, StoryObj } from "@storybook/react";

import MajDropdown from "../components/maj-dropdown/MajDropdown";

const meta = {
    title: 'Maj Dropdown',
    component: MajDropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};