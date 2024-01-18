import { Meta, StoryObj } from "@storybook/react";

import MajAccordion from "../components/maj-accordion/MajAccordion";

const meta = {
    title: 'Maj Accordion',
    component: MajAccordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};