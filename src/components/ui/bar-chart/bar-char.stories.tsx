import { PieChart as PieChartType } from '@/data'
import { Meta, StoryObj } from '@storybook/react'

import { BarChar } from './bar-char'

export type TreeMapProps = {
  data: PieChartType[]
}
const meta = {
  component: BarChar,
  tags: ['autodocs'],
  title: 'Components/BarChar',
} satisfies Meta<typeof BarChar>

export default meta
type Story = StoryObj<typeof meta>

export const BarCharView: Story = (args: TreeMapProps) => (
  <div>
    <BarChar {...args} />
  </div>
)
BarCharView.args = {
  data: [
    {
      country: 'Belarus',
      'hot dog': 57,
    },
    {
      country: 'Russia1',
      'hot dog': 121,
    },
    {
      country: 'Belarus1',
      'hot dog': 57,
    },
    {
      country: 'Russia2',
      'hot dog': 121,
    },
    {
      country: 'Belarus2',
      'hot dog': 57,
    },
    {
      country: 'Russia3',
      'hot dog': 121,
    },
    {
      country: 'Belarus4',
      'hot dog': 57,
    },
    {
      country: 'Russia5',
      'hot dog': 121,
    },
  ],
}
