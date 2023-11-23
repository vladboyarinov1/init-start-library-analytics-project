import { Meta, StoryObj } from '@storybook/react'

import { BarChar } from './bar-char'

const meta = {
  component: BarChar,
  tags: ['autodocs'],
  title: 'Components/BarChar',
} satisfies Meta<typeof BarChar>

export default meta
type Story = StoryObj<typeof meta>

export const BarCharView: Story = (args: any) => (
  <div>
    <BarChar {...args} />
  </div>
)
BarCharView.args = {
  data: [
    {
      count: 57,
      country: 'Belarus',
    },
    {
      count: 121,
      country: 'Russia1',
    },
    {
      count: 57,
      country: 'Belarus1',
    },
    {
      count: 121,
      country: 'Russia2',
    },
    {
      count: 57,
      country: 'Belarus2',
    },
    {
      count: 121,
      country: 'Russia3',
    },
    {
      count: 57,
      country: 'Belarus4',
    },
    {
      count: 121,
      country: 'Russia5',
    },
  ],
}
