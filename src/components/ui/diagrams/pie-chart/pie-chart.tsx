import { Legend } from '@/components/ui/diagrams/line-graph/legend/legend'
import { ResponsivePie } from '@nivo/pie'

import s from './pie-chart.module.scss'

type PieChartProps = {
  data: { id: string; label?: string; value: string }[]
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

export const PieChart = ({ data }: PieChartProps) => {
  return (
    <div>
      <div className={s.pieChart}>
        <ResponsivePie
          activeOuterRadiusOffset={5}
          arcLabel={''}
          arcLabelsTextColor={'var(--color-white)'}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLinkLabelsSkipAngle={10}
          colors={colors}
          cornerRadius={6}
          data={data}
          enableArcLinkLabels={false}
          innerRadius={0.6}
          // margin={{ bottom: 80, left: 80, right: 80, top: 40 }}
          padAngle={2}
          sortByValue
        />
      </div>
      <Legend colors={colors} data={data} />
    </div>
  )
}
