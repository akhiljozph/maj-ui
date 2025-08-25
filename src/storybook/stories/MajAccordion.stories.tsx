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
                id: 1,
                title: "Section 1",
                content: (
                    <MajP>
                        This is the content of section 1. It can include text, images, or any other
                        React components.
                    </MajP>
                ),
                disabled: true,
            },
            {
                id: 2,
                title: "Section 2",
                content: (
                    <MajP>
                        This is the content of section 2. It can include text, images, or any other
                        React components.
                    </MajP>
                ),
            },
            {
                id: 3,
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
