import type { Meta, StoryObj } from "@storybook/react";

import { MajSnackbar } from "../../components";
import React from "react";

const meta: Meta<typeof MajSnackbar> = {
    title: "MajUi/MajSnackbar",
    component: MajSnackbar,
};

export default meta;
type Story = StoryObj<typeof MajSnackbar>;

export const Snackbar: Story = {
    args: {
        children: <>Testing snackbar!</>,
    },
};
