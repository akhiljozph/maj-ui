import type { Meta, StoryObj } from "@storybook/react";

import MajTextField from "../../components/maj-text-field/MajTextField";

const meta: Meta<typeof MajTextField> = {
    title: "MajUi/MajTextField",
    component: MajTextField,
};

export default meta;
type Story = StoryObj<typeof MajTextField>;

export const Primary: Story = {
    args: {
        rows: 10,
        cols: 10,
    },
};

export const Secondary: Story = {
    args: {
        rows: 10,
        cols: 10,
    },
};
