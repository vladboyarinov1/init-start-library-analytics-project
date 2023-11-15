import { ResponsiveCirclePacking } from '@nivo/circle-packing'

import s from './circle-packing.module.scss'

export type CirclePackingProps = {
  borderColor?: string
  borderWidth?: number
  data: any
  padding?: number
}
export const CirclePacking = ({
  borderColor = 'var(--color-white)',
  borderWidth,
  data,
  padding,
}: CirclePackingProps) => {
  const colors = [
    'var(--color-dark)',
    'var(--color-purple-light)',
    'var(--color-lime)',
    'var(--color-lime-pastel)',
  ]

  return (
    <div className={s.circlePacking}>
      <ResponsiveCirclePacking
        animate
        borderColor={borderColor}
        borderWidth={borderWidth}
        colorBy={'id'}
        colors={colors}
        data={data}
        enableLabels
        id={'name'}
        label={d => `${d.id}`}
        labelTextColor={'var(--color-white)'}
        leavesOnly
        // margin={{ bottom: 10, left: 10, right: 10, top: 10 }}
        padding={padding}
        value={'loc'}
      />
    </div>
  )
}
