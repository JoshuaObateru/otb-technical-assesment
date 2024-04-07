import { Meta, StoryObj } from '@storybook/react'
import ExpansionTile from './ExpansionTile'

const meta: Meta<typeof ExpansionTile> = {
    title: "Components/ExpansionTile",
    component: ExpansionTile,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isExpanded: false
    }
}

export const Expanded: Story = {
    args: {
        isExpanded: true
    }
}