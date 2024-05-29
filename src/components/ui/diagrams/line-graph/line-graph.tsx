import { Legend } from '@/components/ui/diagrams/line-graph/legend/legend.tsx'
import { ResponsiveLine } from '@nivo/line'

import s from './line-graph.module.scss'

type LineGraphProps = {
  data: {
    data: {
      x: string
      y: number
    }[]
    id: string
  }[]
  isTooltip?: boolean
  legend?: boolean
  points?: boolean
  variant?: 'catmullRom' | 'linear'
}

export const LineGraph = (props: LineGraphProps) => {
  const { data, isTooltip = false, legend, points = false, variant = 'linear' } = props
  const theme = {
    fontSize: 12,
    textColor: 'var(--color-black-60)',
  }
  const colors = [
    'var(--color-green-primary)',
    'var(--color-lime)',
    'var(--color-dark)',
    'var(--color-blue)',
    'var(--color-pink)',
    'var(--color-purple-light)',
  ]

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.lineGraph}>
          <ResponsiveLine
            axisBottom={{
              tickPadding: 30,
              tickRotation: 0,
              tickSize: 0,
            }}
            axisLeft={{
              legend: 'Количество изданий',
              legendOffset: -55,
              legendPosition: 'middle',
              tickPadding: 10,
              tickRotation: 0,
              tickSize: 0,
              // tickValues: tickValues, // Устанавливаем значения с шагом 10
            }}
            colors={colors}
            curve={variant}
            data={data}
            enableGridX={false}
            enablePoints={points}
            lineWidth={3}
            margin={{ bottom: 80, left: 60, right: 20, top: 50 }}
            pointColor={{ from: 'color', modifiers: [] }}
            pointSize={10}
            theme={theme}
            useMesh={isTooltip}
            xScale={{ type: 'point' }}
            yFormat={' >-.2f'}
            yScale={{
              // max: adjustedMaxY,
              // min: adjustedMinY,
              type: 'linear',
            }}
          />
        </div>
        {legend && <Legend colors={colors} data={data} />}
      </div>
    </>
  )
}
