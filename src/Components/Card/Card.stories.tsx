import { Meta, StoryObj } from '@storybook/react';
import Card from './Card'
import { travelData } from '../../Data/TravelData';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        data: travelData[0]
    }
}

export const Expanded: Story = {
    args: {
        expanded: true,
        data: travelData[1]
    }
}