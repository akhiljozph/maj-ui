import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajDel } from "../../../components/maj-typography";

const meta: Meta<typeof MajDel> = {
    title: "MajUi/MajTypography/MajDel",
    component: MajDel,
};

export default meta;
type Story = StoryObj<typeof MajDel>;

export const Del: Story = {
    args: {
        children: "Keep calm! This is a deleted text.",
    },
};
