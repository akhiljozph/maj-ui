import { Meta, StoryObj } from '@storybook/react';
import { default as Button } from '../components/button/Button';

declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;
export declare const Primary: Story;
export declare const Secondary: Story;
