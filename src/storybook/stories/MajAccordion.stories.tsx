import type { Meta, StoryObj } from "@storybook/react-vite";
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
        accordionTitle: "Expand for more details...",
        children: (
            <MajP>
                Maj SubScript Component
                <MajSubScript>This is an example of subscript tag.</MajSubScript>
            </MajP>
        ),
    },
};
