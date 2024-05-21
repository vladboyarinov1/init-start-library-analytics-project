import { useState } from 'react'

import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { FormWithFieldArray } from '@/components/ui/components/form-with-field-array'
import { SelectButton } from '@/components/ui/components/select-button'
import { CirclePacking } from '@/components/ui/diagrams/circle-packing'
import { keywordNetworkActions } from '@/components/ui/pages/keyword-network'
import { keywordNetworkSelectors } from '@/components/ui/pages/keyword-network/model/keyword-network-selectors'

import s from './keyword-network.module.scss'

export const KeywordNetwork = () => {
  const allOptions = ['ID направления', 'Wikidata']
  const { fetchData } = useActions(keywordNetworkActions)
  const data = useAppSelector(keywordNetworkSelectors).data
  const [value, setValue] = useState('')

  return (
    <div>
      <div className={s.dashboard}>
        <h2 className={s.title}>Сеть ключевого слова</h2>
        <div>
          <FormWithFieldArray allOptions={allOptions} onSubmit={fetchData} />
        </div>
      </div>
      {data.data.children.length > 0 && (
        <div className={s.dashboard}>
          <div className={s.header}>
            <h2>{data.title}</h2>
            <SelectButton
              activeValueName={value}
              data={data.exportData}
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
          <CirclePacking data={data.data} padding={8} />
        </div>
      )}
    </div>
  )
}
