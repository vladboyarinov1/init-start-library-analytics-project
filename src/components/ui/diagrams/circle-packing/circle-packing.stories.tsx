import type { Meta, StoryObj } from '@storybook/react'

import { CirclePacking as CirclePackingType } from '../../../../common/data'
import { CirclePacking } from './circle-packing.tsx'
type CirclePackingProps = {
  borderColor?: string
  borderWidth?: number
  data: CirclePackingType
  padding?: number
}
const meta = {
  component: CirclePacking,
  tags: ['autodocs'],
  title: 'Components/CirclePacking',
} satisfies Meta<typeof CirclePacking>

export default meta
type Story = StoryObj<typeof meta>

export const CirclePackingView: Story = (args: CirclePackingProps) => (
  <div>
    <CirclePacking {...args} />
  </div>
)
CirclePackingView.args = {
  borderColor: 'blue',
  borderWidth: 2,
  data: {
    children: [
      { name: 'Chemistry', score: 5 },
      { name: 'Biology', score: 3 },
      { name: 'Mathematics', score: 8 },
      { name: 'Physics', score: 10 },
      { name: 'Computer Science', score: 12 },
      { name: 'Psychology', score: 6 },
    ],
  },
  padding: 4,
}
