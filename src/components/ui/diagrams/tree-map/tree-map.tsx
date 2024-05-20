import { TreeMap as TreeMapType } from '@/data'
import { ResponsiveTreeMap } from '@nivo/treemap'

import s from './tree-map.module.scss'

export type TreeMapProps = {
  data: {} | TreeMapType
}

export const TreeMap = ({ data }: TreeMapProps) => {
  const colors = [
    'var(--color-green-primary)',
    'var(--color-lime)',
    'var(--color-green-40)',
    'var(--color-dark)',
    'var(--color-blue)',
    'var(--color-pink)',
    'var(--color-purple-light)',
  ]

  const renderLegendItems = () => {
    // Проверка, что data имеет структуру TreeMapType
    if ('children' in data) {
      return data.children.map((child: any, index: number) => (
        <div className={s.legendWrapper} key={index}>
          <span
            className={s.legendCircleColor}
            style={{
              backgroundColor: colors[index % colors.length],
            }}
          ></span>
          <span>{child.name}</span>
        </div>
      ))
    }

    return null
  }

  return (
    <div>
      <div className={s.treeMap}>
        <ResponsiveTreeMap
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.5]],
          }}
          borderWidth={0}
          colors={colors}
          data={data}
          enableParentLabel
          identity={'name'}
          innerPadding={3}
          label={'id'}
          labelSkipSize={40}
          labelTextColor={'var(--color-white)'}
          leavesOnly
          nodeOpacity={1}
          outerPadding={2}
          parentLabelPosition={'left'}
          parentLabelTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
          }}
          theme={{ labels: { text: { fontSize: 14 } } }}
          value={'score'}
          valueFormat={' >-0,.2~f'}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{renderLegendItems()}</div>
    </div>
  )
}
