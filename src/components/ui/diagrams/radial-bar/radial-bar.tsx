import { RLegend } from '@/components/ui/diagrams/radial-bar/legend/radial-legend.tsx'
import { RadialBar as RadialBarType } from '@/data'
import { ResponsiveRadialBar } from '@nivo/radial-bar'

import s from './radial-bar.module.scss'

type RadialBarProps = {
  data: RadialBarType[]
}

export const RadialBar = ({ data }: RadialBarProps) => {
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
        <div className={s.radialBar}>
          <ResponsiveRadialBar
            circularAxisOuter={null}
            colors={colors}
            cornerRadius={2}
            data={data}
            enableCircularGrid={false}
            enableRadialGrid={false}
            endAngle={360}
            padding={0.2}
            radialAxisStart={null}
            valueFormat={'>-.2~f'}
          />
        </div>
        <RLegend colors={colors} data={data} />
      </div>
    </>
  )
}
