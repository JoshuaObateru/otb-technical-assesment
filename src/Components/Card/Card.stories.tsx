import { Meta, StoryObj } from '@storybook/react';
import Card from './Card'

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

export const Expanded: Story = {
    args: {
        expanded: true
    }
}