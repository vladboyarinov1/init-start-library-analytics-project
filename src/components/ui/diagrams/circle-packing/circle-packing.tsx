import { CirclePacking as CirclePackingType } from '@/data/types'
import { ResponsiveCirclePacking } from '@nivo/circle-packing'

import s from './circle-packing.module.scss'

type CirclePackingProps = {
  borderColor?: string
  borderWidth?: number
  data: CirclePackingType
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
        labelTextColor={'var(--color-black)'}
        labelsSkipRadius={19}
        layers={['circles', 'labels']}
        leavesOnly
        // margin={{ bottom: 0, left: 5, right: 5, top: 0 }}
        padding={padding}
        theme={{ labels: { text: { fontSize: 13 } } }}
        value={'score'}
      />
    </div>
  )
}
