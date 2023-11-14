import s from './tooltip.module.scss'

type TooltipProps = {
  point: any
}

export const Tooltip = ({ point }: TooltipProps) => {
  const tooltipStyle = {
    '--triangle-color': point.color,
    backgroundColor: point.color,
  }

  return (
    <div className={s.tooltip} style={tooltipStyle}>
      {point.data.y}
    </div>
  )
}
