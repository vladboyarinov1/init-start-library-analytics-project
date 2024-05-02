import { BarDatum, ComputedDatum, ResponsiveBar } from '@nivo/bar'

type BarCharProps = {
  data: any
}

export const BarChar = ({ data }: BarCharProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <div color={'red'} style={{ height: 600 }}>
        <ResponsiveBar
          axisBottom={{ tickPadding: 10, tickSize: 0 }}
          axisLeft={null}
          axisRight={null}
          axisTop={null}
          barAriaLabel={e => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
          borderRadius={8}
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
