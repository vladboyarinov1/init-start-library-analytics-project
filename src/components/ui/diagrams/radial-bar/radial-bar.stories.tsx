import type { Meta, StoryObj } from '@storybook/react'

import { RadialBar as RadialBarType } from '../../../../common/data'
import { RadialBar } from './radial-bar.tsx'

type RadialBarProps = {
  data: RadialBarType[]
}
const meta = {
  component: RadialBar,
  tags: ['autodocs'],
  title: 'Components/RadialBar',
} satisfies Meta<typeof RadialBar>

export default meta
type Story = StoryObj<typeof meta>

export const CirclePackingView: Story = (args: RadialBarProps) => (
  <div>
    <RadialBar {...args} />
  </div>
)
CirclePackingView.args = {
  data: [
    {
      data: [
        {
          x: 'Belarusian National Technical University',
          y: 3,
        },
        {
          x: 'Belarusian State University',
          y: 3,
        },
        {
          x: 'State University of Informatics and Radioelectronics',
          y: 2,
        },
      ],
      id: '2018',
    },
    {
      data: [
        {
          x: 'Belarusian National Technical University',
          y: 23,
        },
        {
          x: 'Belarusian State University',
          y: 17,
        },
        {
          x: 'State University of Informatics and Radioelectronics',
          y: 20,
        },
      ],
      id: '2019',
    },
    {
      data: [
        {
          x: 'Belarusian National Technical University',
          y: 25,
        },
        {
          x: 'Belarusian State University',
          y: 12,
        },
        {
          x: 'State University of Informatics and Radioelectronics',
          y: 16,
        },
      ],
      id: '2020',
    },
  ],
}
