import { Meta, StoryObj } from '@storybook/react';

import MajUi from '../components/maj-ui/MajUi';

const meta = {
    title: 'Maj Ui',
    component: MajUi,
    parameters: {
        layout: 'centered',
        argTypes: {
            color: { control: 'color' },
            backgroundColor: { control: 'text'}
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MajUi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: '#ffc40c',
        backgroundColor: '#000000'
    }
};