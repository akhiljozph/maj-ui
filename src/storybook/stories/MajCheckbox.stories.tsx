import type { Meta, StoryObj } from "@storybook/react";

import MajCheckbox from "../../components/maj-checkbox/MajCheckbox";

const meta: Meta<typeof MajCheckbox> = {
    title: "MajUi/MajCheckbox",
    component: MajCheckbox,
};

export default meta;
type Story = StoryObj<typeof MajCheckbox>;

export const Primary: Story = {
    args: {
        label: "Checkbox"
    },
};


