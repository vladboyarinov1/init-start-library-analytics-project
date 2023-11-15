import type { Meta, StoryObj } from '@storybook/react'

import { CirclePacking, CirclePackingProps } from './circle-packing'

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
  data: {
    children: [
      { loc: 20, name: 'Physics' },
      { loc: 5, name: 'Chemistry' },
      { loc: 3, name: 'Biology' },
      { loc: 8, name: 'Mathematics' },
      { loc: 12, name: 'Computer Science' },
      { loc: 6, name: 'Psychology' },
      { loc: 9, name: 'Sociology' },
      { loc: 15, name: 'Economics' },
      { loc: 4, name: 'History' },
      { loc: 7, name: 'Philosophy' },
      { loc: 10, name: 'Linguistics' },
      { loc: 2, name: 'Art' },
      { loc: 11, name: 'Geography' },
      { loc: 13, name: 'Political Science' },
    ],
    name: 'root',
  },
}
