import { Meta, StoryObj } from "@storybook/react";

import MajSnackbar from "../components/maj-snackbar/MajSnackbar";

const meta = {
    title: 'Maj Snackbar',
    component: MajSnackbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};