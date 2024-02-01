import { Meta, StoryObj } from "@storybook/react";

import MajHamburger from "../components/maj-dialog/MajDialog";

const meta = {
    title: 'Maj Hamburger',
    component: MajHamburger,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajHamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};