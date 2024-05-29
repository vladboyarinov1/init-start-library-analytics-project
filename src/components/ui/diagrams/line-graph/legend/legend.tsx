import s from './legend.module.scss'

type LegendDataType1 = {
  data: { x: string; y: number }[]
  id: string
}

type LegendDataType2 = {
  id: string
  label?: string
  value: string
}

type LegendProps = {
  colors: string[]
  data: LegendDataType1[] | LegendDataType2[]
}

export const Legend = ({ colors, data }: LegendProps) => {
  // Determine the type of data and transform it if necessary
  const isDataType2 = (item: any): item is LegendDataType2 => 'value' in item

  const transformedData: LegendDataType2[] =
    Array.isArray(data) && data.length > 0 && 'data' in data[0]
      ? (data as LegendDataType1[]).map(item => ({
          id: item.id,
          value: item.data.reduce((total, d) => total + d.y, 0).toString(),
        }))
      : (data as LegendDataType2[])

  // Calculate the total value of all items if data is of LegendDataType2
  const totalValue = isDataType2(data[0])
    ? transformedData.reduce((total, item) => total + parseFloat(item.value), 0)
    : 0

  return (
    <div className={s.container}>
      {transformedData.map((item, index: number) => {
        // Calculate the percentage for each item if data is of LegendDataType2
        const percentage =
          isDataType2(item) && totalValue > 0
            ? ((parseFloat(item.value) / totalValue) * 100).toFixed(2)
            : null

        return (
          <div className={s.wrapper} key={item.id}>
            <span
              style={{
                backgroundColor: colors[index % colors.length],
                borderRadius: '50%',
                display: 'inline-block',
                minHeight: '16px',
                minWidth: '16px',
              }}
            ></span>
            <span className={s.legendName}>
              {item.id} {percentage !== null ? `- ${percentage}%` : ''}
            </span>
          </div>
        )
      })}
    </div>
  )
}
