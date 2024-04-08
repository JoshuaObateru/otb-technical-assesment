import { Meta, StoryObj } from '@storybook/react';
import OptionComponent from './OptionComponent';
import { MdSortByAlpha } from "react-icons/md";

const meta: Meta<typeof OptionComponent> = {
    title: 'Components/OptionComponent',
    component: OptionComponent,
    tags: ['autodocs']

}
export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'price',
        children: <MdSortByAlpha style={{
            fontWeight: 900,
            fontSize: 'larger',
        }} />,
        onClick: () => { }
    }
}
export const Selected: Story = {
    args: {
        isSelected: true,
        label: 'price',
        children: <MdSortByAlpha style={{
            fontWeight: 900,
            fontSize: 'larger',
        }} />,
        onClick: () => { }
    }
}