import { Meta, StoryObj } from "@storybook/react";

import MajBreadcrumbs from "../components/maj-breadcrumbs/MajBreadcrumbs";

const meta = {
    title: 'Maj Breadcrumbs',
    component: MajBreadcrumbs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};