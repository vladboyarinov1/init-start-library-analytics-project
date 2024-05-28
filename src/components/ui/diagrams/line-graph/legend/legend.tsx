import s from './legend.module.scss'

type LegendProps = {
  colors: string[]
  data: { id: string; label?: string; value: string }[]
}

export const Legend = ({ colors, data }: LegendProps) => {
  // Calculate the total value of all items
  const totalValue = data.reduce((total, item) => total + parseFloat(item.value), 0)

  return (
    <div className={s.container}>
      {data.map((item, index: number) => {
        // Calculate the percentage for each item
        const percentage = ((parseFloat(item.value) / totalValue) * 100).toFixed(2)

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
              {item.id} - {percentage}%
            </span>
          </div>
        )
      })}
    </div>
  )
}
