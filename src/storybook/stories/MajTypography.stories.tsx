import type { Meta, StoryObj } from "@storybook/react";

import MajTypography from "../../components/maj-typography/MajTypography";

const meta: Meta<typeof MajTypography> = {
    title: "MajUi/MajTypography",
    component: MajTypography,
};

export default meta;
type Story = StoryObj<typeof MajTypography>;

export const Primary: Story = {
    args: {},
};

export const Secondary: Story = {
    args: {},
};

export const Tertiary: Story = {
    args: {},
};
