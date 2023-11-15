import { LineGraphProps } from '@/components/ui/line-graph/line-graph'
import { Meta, StoryObj } from '@storybook/react'

import { LineGraph } from './'

const meta: Meta<LineGraphProps> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['catmullRom', 'linear'],
    },
  },
  component: LineGraph,
  title: 'Components/LineGraph',
}

type Story = StoryObj<typeof meta>
export default meta

export const LineGraphView: Story = (args: LineGraphProps) => (
  <div>
    <LineGraph {...args} />
  </div>
)

LineGraphView.args = {
  data: [
    {
      data: [
        {
          x: '2018',
          y: 0,
        },
        {
          x: '2019',
          y: 23,
        },
        {
          x: '2020',
          y: 25,
        },
        {
          x: '2021',
          y: 19,
        },
      ],
      id: 'Belarusian National Technical University',
    },
    {
      data: [
        {
          x: '2018',
          y: 3,
        },
        {
          x: '2019',
          y: 17,
        },
        {
          x: '2020',
          y: 12,
        },
        {
          x: '2021',
          y: 19,
        },
      ],
      id: 'Belarusian State University',
    },
    {
      data: [
        {
          x: '2018',
          y: 0,
        },
        {
          x: '2019',
          y: 20,
        },
        {
          x: '2020',
          y: 16,
        },
        {
          x: '2021',
          y: 45,
        },
      ],
      id: 'State University of Informatics and Radioelectronics',
    },
  ],
  isTooltip: true,
  points: true,
}

LineGraphView.parameters = {
  tags: ['autodocs'],
}
