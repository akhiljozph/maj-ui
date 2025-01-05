import type { Meta, StoryObj } from "@storybook/react";

import MajIconButton from "../../components/maj-icon-button/MajIconButton";

const meta: Meta<typeof MajIconButton> = {
    title: "MajUi/MajIconButton",
    component: MajIconButton,
    argTypes: {
        shade: {
            options: ["Light", "Solid"],
            control: { type: "radio" },
        },
        variant: {
            options: [
                "360",
                "address-book",
                "angle-down",
                "angle-left",
                "angle-right",
                "angle-up",
                "arrow-down-to-line",
                "arrow-down",
                "arrow-left",
                "arrow-right-arrow-left",
                "arrows-rotate",
                "arrows-up",
                "arrow-up-from-bracket",
                "arrow-up-to-line",
                "backward-step",
                "barcode-read",
                "bars",
                "bell",
                "bolt-lightning",
                "box-open",
                "bug",
                "calendar-days",
                "camera-viewfinder",
                "caret-down",
                "caret-left",
                "caret-right",
                "caret-up",
            ],
            control: { type: "select" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof MajIconButton>;

export const Primary: Story = {
    args: {
        shade: "Light",
        variant: "360",
    },
};
