import { Meta, StoryObj } from '@storybook/react';
import Text from '../Text/Text';


const meta: Meta<typeof Text> = {
    title: "Components/Text",
    component: Text,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'I am a text'
    }
}

export const Light: Story = {
    args: {
        children: 'I am a text',
        type: 'subHeader'
    }
}

export const Header: Story = {
    args: {
        children: 'I am a text',
        type: 'header',
        color: 'secondary'
    }
}

export const Strong: Story = {
    args: {
        children: 'I am a text',
        type: 'bolder',
        color: 'secondary'
    }
}
