import type { Meta, StoryObj } from '@storybook/react'

import { TreeMap as TreeMapType } from '@/data'

import { TreeMap } from './tree-map'

export type TreeMapProps = {
  data: TreeMapType
}
const meta = {
  component: TreeMap,
  tags: ['autodocs'],
  title: 'Components/TreeMap',
} satisfies Meta<typeof TreeMap>

export default meta
type Story = StoryObj<typeof meta>

export const TreeMapView: Story = (args: TreeMapProps) => (
  <div>
    <TreeMap {...args} />
  </div>
)
TreeMapView.args = {
  data: {
    children: [
      {
        children: [
          {
            name: 'Europe',
            score: 4079,
          },
          {
            name: 'Asia',
            score: 3457,
          },
          {
            name: 'North America',
            score: 2178,
          },
          {
            name: 'Africa',
            score: 342,
          },
          {
            name: 'South America',
            score: 121,
          },
          {
            name: 'Oceania',
            score: 80,
          },
        ],
        name: 'Computer science',
      },
      {
        children: [
          {
            name: 'Europe',
            score: 2079,
          },
          {
            name: 'Asia',
            score: 1457,
          },
          {
            name: 'North America',
            score: 1178,
          },
          {
            name: 'Africa',
            score: 342,
          },
          {
            name: 'South America',
            score: 121,
          },
          {
            name: 'Oceania',
            score: 80,
          },
        ],
        name: 'Chemical engineering',
      },
      {
        children: [
          {
            name: 'Europe',
            score: 1204,
          },
          {
            name: 'Asia',
            score: 738,
          },
          {
            name: 'North America',
            score: 652,
          },
          {
            name: 'Africa',
            score: 87,
          },
          {
            name: 'South America',
            score: 14,
          },
          {
            name: 'Oceania',
            score: 8,
          },
        ],
        name: 'Thermodynamics',
      },
    ],
  },
}
