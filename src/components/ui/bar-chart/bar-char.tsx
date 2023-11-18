import { BarDatum, ComputedDatum, ResponsiveBar } from '@nivo/bar'

type BarCharProps = {
  data: any
}

export const BarChar = ({ data }: BarCharProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ height: 600 }}>
        <ResponsiveBar
          axisBottom={{ tickPadding: 10, tickSize: 0 }}
          axisLeft={null}
          axisRight={null}
          axisTop={null}
          barAriaLabel={e => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
          borderRadius={8}
          colors={['var(--color-purple-light)']}
          data={data}
          enableLabel
          indexBy={'country'}
          keys={['count']}
          label={(d: ComputedDatum<BarDatum>) => `${d.data.country}: ${d.value}`}
          layout={'horizontal'}
          margin={{ bottom: 50, left: 20, right: 20, top: 30 }}
          padding={0.8}
        />
      </div>
    </div>
  )
}
