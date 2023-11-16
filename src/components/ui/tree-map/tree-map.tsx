import { ResponsiveTreeMap } from '@nivo/treemap'
export type TreeMapProps = {
  data: any
}
export const TreeMap = ({ data }: TreeMapProps) => {
  const colors = [
    'var(--color-green-primary)',
    'var(--color-lime)',
    'var(--color-dark)',
    'var(--color-blue)',
    'var(--color-pink)',
    'var(--color-purple-light)',
  ]

  return (
    <div style={{ height: 400 }}>
      <ResponsiveTreeMap
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.1]],
        }}
        colors={colors}
        data={data}
        identity={'name'}
        labelSkipSize={12}
        leavesOnly
        margin={{ bottom: 10, left: 10, right: 10, top: 10 }}
        parentLabelPosition={'left'}
        parentLabelTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        value={'loc'}
        valueFormat={'.02s'}
      />
    </div>
  )
}
