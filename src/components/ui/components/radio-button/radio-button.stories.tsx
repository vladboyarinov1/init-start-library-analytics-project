import type { Meta, StoryObj } from '@storybook/react'

import { RadioButton } from './index.ts'

const meta = {
  component: RadioButton,
  tags: ['autodocs'],
  title: 'Components/RadioButton',
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const RadioButtonDefault: Story = {
  args: {
    checked: false,
    id: '1',
    name: '1',
  },
}
export const RadioButtonChecked: Story = {
  args: {
    checked: true,
    id: '1',
    name: '1',
  },
}
