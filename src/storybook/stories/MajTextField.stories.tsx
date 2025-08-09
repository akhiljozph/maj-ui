import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajTextField } from "../../components";

const meta: Meta<typeof MajTextField> = {
    title: "MajUi/MajTextField",
    component: MajTextField,
};

export default meta;
type Story = StoryObj<typeof MajTextField>;

export const Primary: Story = {
    args: {
        rows: 10,
        cols: 100,
    },
};
