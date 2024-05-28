import { Legend } from '@/components/ui/diagrams/line-graph/legend/legend'
import { ResponsivePie } from '@nivo/pie'

import s from './pie-chart.module.scss'

type PieChartProps = {
  data: { id: string; label?: string; value: string }[]
}

type ColorMapping = {
  [key: string]: string
}

const colors = [
  'var(--color-green-60)',
  'var(--color-lime)',
  'var(--color-dark)',
  'var(--color-blue)',
  'var(--color-pink)',
  'var(--color-purple-light)',
  'var(--color-lime-pastel)',
]

const getColor = (data: { id: string }[], colors: string[]): ColorMapping => {
  const colorMapping: ColorMapping = {}

  data.forEach((item, index) => {
    colorMapping[item.id] = colors[index % colors.length]
  })

  return colorMapping
}

export const PieChart = ({ data }: PieChartProps) => {
  const colorMapping: ColorMapping = getColor(data, colors)

  return (
    <div className={s.container}>
      <div className={s.pieChart}>
        <ResponsivePie
          activeOuterRadiusOffset={5}
          arcLabel={''}
          arcLabelsTextColor={'var(--color-white)'}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLinkLabelsSkipAngle={10}
          colors={({ id }) => colorMapping[id]}
          cornerRadius={6}
          data={data}
          enableArcLinkLabels={false}
          innerRadius={0.6}
          margin={{ bottom: 5, left: 5, right: 5, top: 5 }}
          padAngle={2}
          sortByValue
        />
      </div>
      <Legend colorMapping={colorMapping} colors={colors} data={data} />
    </div>
  )
}
