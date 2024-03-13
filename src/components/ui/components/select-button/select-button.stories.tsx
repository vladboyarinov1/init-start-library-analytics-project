import type { Meta, StoryObj } from '@storybook/react'

import { SelectButton } from './select-button.tsx'

const meta = {
  component: SelectButton,
  tags: ['autodocs'],
  title: 'Components/SelectButton',
} satisfies Meta<typeof SelectButton>

export default meta
type Story = StoryObj<typeof meta>

export const SelectButtonView: Story = (args: any) => (
  <div>
    <SelectButton {...args} />
  </div>
)
SelectButtonView.args = {
  itemsData: [
    {
      items: [{ label: 'По странам ' }, { label: 'По количеству публикаций' }],
    },
    {
      items: [{ label: 'По возрастанию ' }, { label: 'По убыванию' }],
    },
  ],
  title: 'Сортировать',
  variant: 'primary',
}
