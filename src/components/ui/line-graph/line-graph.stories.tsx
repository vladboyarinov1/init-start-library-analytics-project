import type { Meta, StoryObj } from '@storybook/react'

import { LineGraph } from './'

const meta = {
  component: LineGraph,
  tags: ['autodocs'],
  title: 'Components/LineGraph',
} satisfies Meta<typeof LineGraph>

export default meta
type Story = StoryObj<typeof meta>
const data = [
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
]

export const LineGraphView: Story = {
  args: { data },
  render: () => (
    <div>
      <LineGraph data={data} />
    </div>
  ),
}
