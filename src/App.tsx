import { Card } from '@/components/ui/card'
import { LineGraph } from '@/components/ui/line-graph'
const data = [
  {
    data: [
      {
        x: '2018',
        y: 30,
      },
      {
        x: '2019',
        y: 60,
      },
      {
        x: '2020',
        y: 12,
      },
      {
        x: '2021',
        y: 66,
      },
    ],
    id: 'Belarusian National Technical University2',
  },
  {
    data: [
      {
        x: '2018',
        y: 21,
      },
      {
        x: '2019',
        y: 40,
      },
      {
        x: '2020',
        y: 50,
      },
      {
        x: '2021',
        y: 56,
      },
    ],
    id: 'Belarusian National Technical University3',
  },
  {
    data: [
      {
        x: '2018',
        y: 10,
      },
      {
        x: '2019',
        y: 32,
      },
      {
        x: '2020',
        y: 40,
      },
      {
        x: '2021',
        y: 59,
      },
    ],
    id: 'Belarusian National Technical University5',
  },
  {
    data: [
      {
        x: '2018',
        y: 0,
      },
      {
        x: '2019',
        y: 12,
      },
      {
        x: '2020',
        y: 34,
      },
      {
        x: '2021',
        y: 11,
      },
    ],
    id: 'Belarusian National Technical University6',
  },
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
]

export function App() {
  return (
    <div>
      <Card height={'auto'} maxWidth={1140}>
        <div>Title</div>
        <LineGraph data={data} />
      </Card>
    </div>
  )
}
