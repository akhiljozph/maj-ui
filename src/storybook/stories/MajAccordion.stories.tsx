import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { MajAccordion } from "../../components";
import { MajP, MajSubScript } from "../../components";

const meta: Meta<typeof MajAccordion> = {
    title: "MajUi/MajAccordion",
    component: MajAccordion,
};

export default meta;
type Story = StoryObj<typeof MajAccordion>;

export const Accordion: Story = {
    args: {
        items: [
            {
                title: "Section 1",
                content: (
                    <MajP>
                        This is the content of section 1. It can include text, images, or any other
                        React components.
                    </MajP>
                ),
            },
            {
                title: "Section 2",
                content: (
                    <MajP>
                        This is the content of section 2. It can include text, images, or any other
                        React components.
                    </MajP>
                ),
            },
            {
                title: "Section 3",
                content: (
                    <MajP>
                        This is the content of section 3. It can include text, images, or any other
                        React components.
                    </MajP>
                ),
            },
        ],
    },
};
