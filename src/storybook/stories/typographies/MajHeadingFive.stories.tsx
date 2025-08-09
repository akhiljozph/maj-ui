import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajH5 } from "../../../components/maj-typography";

const meta: Meta<typeof MajH5> = {
    title: "MajUi/MajTypography/MajH5",
    component: MajH5,
};

export default meta;
type Story = StoryObj<typeof MajH5>;

export const H5: Story = {
    args: {
        children: "Keep calm! This is a heading 5.",
    },
};
