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
        accordionTitle: "What is Lorem Ipsum?",
        accordionTitleStyle: { backgroundColor: "black", color: "white", fontSize: "16px" },
        children: (
            <MajP>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
            </MajP>
        ),
    },
};
