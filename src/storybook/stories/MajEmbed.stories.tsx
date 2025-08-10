import { Meta, StoryObj } from "@storybook/react";

import { MajEmbed } from "../../components";

const meta: Meta<typeof MajEmbed> = {
    title: "MajUi/MajEmbed",
    component: MajEmbed,
};

export default meta;
type Story = StoryObj<typeof MajEmbed>;

export const Embed: Story = {
    args: {
        src: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=2048x2048&w=is&k=20&c=KTpY1O4d7-EuX-R_GR_44Upc-n9esJOZFpcqvA4CM0E=",
        type: "image/jpg",
        width: "300",
        height: "300",
    },
};
