import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajH4 } from "../../../components/maj-typography";

const meta: Meta<typeof MajH4> = {
    title: "MajUi/MajTypography/MajH4",
    component: MajH4,
};

export default meta;
type Story = StoryObj<typeof MajH4>;

export const H4: Story = {
    args: {
        children: "Having fun! This is a heading 4.",
    },
};
