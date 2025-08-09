import type { Meta, StoryObj } from "@storybook/react-vite";

import { MajSelect } from "../../components";

const meta: Meta<typeof MajSelect> = {
    title: "MajUi/MajSelect",
    component: MajSelect,
};

export default meta;
type Story = StoryObj<typeof MajSelect>;

export const Primary: Story = {
    args: {
        options: [
            {
                name: "Option 1",
                value: 1,
            },
            {
                name: "Option 2",
                value: 2,
            },
            {
                name: "Option 3",
                value: 3,
            },
            {
                name: "Option 4",
                value: 4,
            },
        ],
    },
};
