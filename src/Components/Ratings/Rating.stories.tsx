import { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating';

const meta: Meta<typeof Rating> = {
    title: 'Components/Rating',
    component: Rating,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {

    }
}
export const OneStar: Story = {
    args: {
        noOfStars: 1
    }
}
export const TwoStars: Story = {
    args: {
        noOfStars: 2
    }
}
export const ThreeStars: Story = {
    args: {
        noOfStars: 3
    }
}
export const FourStars: Story = {
    args: {
        noOfStars: 4
    }
}
export const FiveStars: Story = {
    args: {
        noOfStars: 5
    }
}