import { Meta, StoryObj } from "@storybook/react";

import MajAutocomplete from "../components/maj-autocomplete/MajAutocomplete";

const meta = {
    title: 'Maj Autocomplete',
    component: MajAutocomplete,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajAutocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};