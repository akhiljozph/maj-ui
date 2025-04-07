import type { Meta, StoryObj } from "@storybook/react";

import MajTypography from "../../components/maj-typography/MajTypography";

const meta: Meta<typeof MajTypography> = {
    title: "MajUi/MajTypography",
    component: MajTypography,
};

export default meta;
type Story = StoryObj<typeof MajTypography>;

export const HeadingOne: Story = {};

export const HeadingTwo: Story = {};

export const HeadingThree: Story = {};

export const HeadingFour: Story = {};

export const HeadingFive: Story = {};

export const HeadingSix: Story = {};

export const SubScript: Story = {};

export const SuperScript: Story = {};

export const Link: Story = {};
