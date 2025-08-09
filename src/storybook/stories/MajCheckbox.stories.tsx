import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajCheckbox } from "../../components";

const meta: Meta<typeof MajCheckbox> = {
    title: "MajUi/MajCheckbox",
    component: MajCheckbox,
};

export default meta;
type Story = StoryObj<typeof MajCheckbox>;

export const Primary: Story = {
    args: {
        label: "Checkbox",
    },
};
