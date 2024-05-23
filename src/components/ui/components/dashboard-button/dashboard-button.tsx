import { SelectedValue } from '@/common/data'

import s from './dashboard-button.module.scss'

interface DashboardButtonProps {
  currentType: SelectedValue
  onChange: (value: SelectedValue) => void
  title: string
  value: SelectedValue
}

export const DashboardButton = ({ currentType, onChange, title, value }: DashboardButtonProps) => {
  return (
    <button
      className={currentType === value ? s.activeBtn : s.button}
      onClick={() => onChange(value)}
    >
      {title}
    </button>
  )
}
