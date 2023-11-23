import s from './legend.module.scss'

type LegendProps = {
  colors: string[]
  data: {
    data: {
      x: string
      y: number
    }[]
    id: string
  }[]
}
export const Legend = ({ colors, data }: LegendProps) => {
  return (
    <div>
      {data.map((item, index: number) => (
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
          <span className={s.legendName}>{item.id}</span>
        </div>
      ))}
    </div>
  )
}
