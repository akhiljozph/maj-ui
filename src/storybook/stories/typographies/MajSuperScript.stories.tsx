import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajSuperScript } from "../../../components/maj-typography";

const meta: Meta<typeof MajSuperScript> = {
    title: "MajUi/MajTypography/MajSuperScript",
    component: MajSuperScript,
};

export default meta;
type Story = StoryObj<typeof MajSuperScript>;

export const SuperScript: Story = {
    args: {
        children: "Be happy! It's a superscript boy.",
    },
};
