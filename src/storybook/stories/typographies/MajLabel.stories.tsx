import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajLabel } from "../../../components/maj-typography";

const meta: Meta<typeof MajLabel> = {
    title: "MajUi/MajTypography/MajLabel",
    component: MajLabel,
};

export default meta;
type Story = StoryObj<typeof MajLabel>;

export const Label: Story = {
    args: {
        children: "Keep calm! This is a label text.",
    },
};
