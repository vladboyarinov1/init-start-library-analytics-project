import s from '@/components/ui/diagrams/line-graph/legend/legend.module.scss'

type RadialDataItem = {
  data: {
    x: string
    y: number
  }[]
  id: string
}

type LegendProps = {
  colors: string[]
  data: RadialDataItem[]
}

export const RLegend = ({ colors, data }: LegendProps) => {
  const universities: string[] = []

  // Collect unique university names
  data.forEach(item => {
    item.data.forEach(university => {
      if (!universities.includes(university.x)) {
        universities.push(university.x)
      }
    })
  })

  return (
    <div className={s.container}>
      {universities.map((university, index) => (
        <div className={s.wrapper} key={index}>
          <span
            style={{
              backgroundColor: colors[index % colors.length],
              borderRadius: '50%',
              display: 'inline-block',
              minHeight: '16px',
              minWidth: '16px',
            }}
          ></span>
          <span className={s.legendName}>{university}</span>
        </div>
      ))}
    </div>
  )
}
