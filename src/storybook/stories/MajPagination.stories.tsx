import type { Meta, StoryObj } from "@storybook/react";

import { MajPagination } from "../../components";

const meta: Meta<typeof MajPagination> = {
    title: "MajUi/MajPagination",
    component: MajPagination,
};

export default meta;
type Story = StoryObj<typeof MajPagination>;

export const ToggleWithLabel: Story = {
    args: {
        msg: "9",
    },
};
