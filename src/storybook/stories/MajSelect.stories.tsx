import type { Meta, StoryObj } from "@storybook/react";

import MajSelect from "../../components/maj-select/MajSelect";

const meta: Meta<typeof MajSelect> = {
    title: "MajUi/MajSelect",
    component: MajSelect,
};

export default meta;
type Story = StoryObj<typeof MajSelect>;

export const Primary: Story = {
    args: {},
};
