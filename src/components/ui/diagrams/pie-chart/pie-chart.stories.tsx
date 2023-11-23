import type { Meta, StoryObj } from '@storybook/react'

import { PieChart as PieChartType } from '@/data'

import { PieChart } from './pie-chart.tsx'

export type TreeMapProps = {
  data: PieChartType[]
}
const meta = {
  component: PieChart,
  tags: ['autodocs'],
  title: 'Components/PieChart',
} satisfies Meta<typeof PieChart>

export default meta
type Story = StoryObj<typeof meta>

export const PieChartView: Story = (args: TreeMapProps) => (
  <div>
    <PieChart {...args} />
  </div>
)
PieChartView.args = {
  data: [
    { id: 'БНТУ', value: '3000' },
    { id: 'БГУИР', value: '2000' },
    { id: 'БГУ', value: '6000' },
  ],
}
