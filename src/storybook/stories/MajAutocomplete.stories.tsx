import type { Meta, StoryObj } from "@storybook/react";

import MajAutocomplete from "../../components/maj-autocomplete/MajAutocomplete";

const meta: Meta<typeof MajAutocomplete> = {
  title: "MajUi/MajAutocomplete",
  component: MajAutocomplete,
};

export default meta;
type Story = StoryObj<typeof MajAutocomplete>;

export const Autocomplete: Story = {
  args: {
    options: [
      "Primary",
      "Secondary",
      "Tertiary",
      "Quiet"
    ]
  },
};
