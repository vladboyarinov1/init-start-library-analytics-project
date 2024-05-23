import { ReactNode, useState } from 'react'

import { SelectButton } from '@/components/ui/components/select-button'

import s from './chart-section.module.scss'

type ChartSectionProps = {
  children: ReactNode
  count?: null | number
  data: any
  title: string
}
export const ChartSection = ({ children, count, data, title }: ChartSectionProps) => {
  const [value, setValue] = useState('')

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>
          <h2 className={s.title}>{title}</h2>
          {count && <h2 className={s.count}>Результатов: {count} </h2>}
        </div>
        <div>
          <SelectButton
            activeValueName={value}
            data={data}
            itemsData={[
              {
                items: [{ label: 'Word' }, { label: 'Excel' }],
              },
            ]}
            name={value}
            onChange={setValue}
            setFieldValue={setValue}
            title={'Экспорт'}
            variant={'export'}
          />
        </div>
      </div>
      <div className={s.children}>{children}</div>
    </div>
  )
}
