import { Meta, StoryObj } from "@storybook/react";

import MajEmbed from "../../components/maj-embed/MajEmbed";

const meta: Meta<typeof MajEmbed> = {
    title: "MajUi/MajEmbed",
    component: MajEmbed,
};

export default meta;
type Story = StoryObj<typeof MajEmbed>;

export const Embed: Story = {
    args: {},
};
