import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MajAccordion from "../../components/maj-accordion/MajAccordion";
import { MajP, MajSubScript } from "../../components/maj-typography";

const meta: Meta<typeof MajAccordion> = {
    title: "MajUi/MajAccordion",
    component: MajAccordion,
};

export default meta;
type Story = StoryObj<typeof MajAccordion>;

export const Accordion: Story = {
    args: {
        children: (
            <MajP>
                Maj SubScript Component
                <MajSubScript>This is an example of subscript tag.</MajSubScript>
            </MajP>
        ),
    },
};
