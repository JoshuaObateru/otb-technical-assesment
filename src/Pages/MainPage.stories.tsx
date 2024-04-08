import { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'Pages/MainPage',
    component: MainPage,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
}