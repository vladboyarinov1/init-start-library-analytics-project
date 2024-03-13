import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxItem } from './index.ts'

const meta = {
  component: CheckboxItem,
  tags: ['autodocs'],
  title: 'Components/CheckboxItem',
} satisfies Meta<typeof CheckboxItem>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxItemDefault: Story = {
  args: {
    checked: true,
  },
}
