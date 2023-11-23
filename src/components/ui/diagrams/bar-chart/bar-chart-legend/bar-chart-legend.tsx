import s from './bar-chart-legend.module.scss'
type BarChartLegendProps = {
  data: any
}
export const BarChartLegend = ({ data }: BarChartLegendProps) => {
  return (
    <>
      {data
        .slice()
        .reverse()
        .map((item: any, index: number) => (
          <div
            className={s.legendWrapper}
            key={index}
            style={{
              top: 20 + index * 90,
            }}
          >
            <div className={s.name}>{item.country}</div>
            <div className={s.value}>{item['hot dog']}</div>
          </div>
        ))}
    </>
  )
}
