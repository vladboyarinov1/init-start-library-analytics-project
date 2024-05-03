import { BarDatum, ComputedDatum, ResponsiveBar } from '@nivo/bar'

type BarCharProps = {
  data: any
}

export const BarChar = ({ data }: BarCharProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ height: 700 }}>
        <ResponsiveBar
          axisBottom={{ tickPadding: 10, tickSize: 6 }}
          axisLeft={null}
          axisRight={null}
          axisTop={null}
          // barAriaLabel={e => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
          barAriaLabel={e => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
          borderRadius={6}
          borderWidth={3}
          colors={['var(--color-purple-light)']}
          data={data}
          // indexBy={'country'}
          enableLabel
          // keys={['count']}
          indexBy={'id'}
          keys={['value']}
          label={(d: ComputedDatum<BarDatum>) => `${d.data.id}: ${d.value}`}
          layout={'horizontal'}
          margin={{ bottom: 50, left: 60, right: 20, top: 30 }}
          padding={0.8}
        />
      </div>
    </div>
  )
}
