import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: '£1,136.50',
        onClick: () => { console.log('Clicked Me') }
    }
}