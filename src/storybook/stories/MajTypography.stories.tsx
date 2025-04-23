import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MajTypography> = {
    title: "MajUi/MajTypography",
    component: MajTypography,
};

export default meta;
type Story = StoryObj<typeof MajTypography>;

export const HeadingOne: Story = {
    args: {
        child: "Heading One",
    },
};

export const HeadingTwo: Story = {
    args: {
        child: "Heading Two",
    },
};

export const HeadingThree: Story = {
    args: {
        child: "Heading Three",
    },
};

export const HeadingFour: Story = {
    args: {
        child: "Heading Four",
    },
};

export const HeadingFive: Story = {
    args: {
        child: "Heading Five",
    },
};

export const HeadingSix: Story = {
    args: {
        child: "Heading Six",
    },
};

export const SubScript: Story = {
    args: {
        child: "SubScript",
    },
};

export const SuperScript: Story = {
    args: {
        child: "SuperScript",
    },
};

export const Link: Story = {
    args: {
        child: "Link",
    },
};
