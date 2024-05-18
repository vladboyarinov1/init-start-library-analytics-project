import { useState } from 'react'

import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { CirclePacking } from '@/components/ui/diagrams/circle-packing'
import { keywordNetworkActions } from '@/components/ui/pages/keyword-network'
import { keywordNetworkSelectors } from '@/components/ui/pages/keyword-network/model/keyword-network-selectors'
import { Search } from '@/icons'
import { Form } from 'antd'
import { FieldArray, Formik } from 'formik'

import s from './keyword-network.module.scss'

export const KeywordNetwork = () => {
  const allOptions2 = ['ID направления', 'Wikidata']
  const { fetchData } = useActions(keywordNetworkActions)
  const data = useAppSelector(keywordNetworkSelectors).data
  const [value, setValue] = useState('')

  return (
    <div>
      <div className={s.dashboard}>
        <div>
          <Formik
            initialValues={{ pairs: [{ inputValue: '', selectValue: '' }] }}
            onSubmit={values => {
              alert(JSON.stringify(values, null, 2))
              fetchData()
            }}
          >
            {({ handleChange, handleSubmit, setFieldValue, values }) => (
              <Form>
                <FieldArray
                  name={'pairs'}
                  render={arrayHelpers => (
                    <div className={s.form}>
                      {values.pairs.map((pair, index) => (
                        <div className={s.item} key={index}>
                          <SelectButton
                            activeValueName={values.pairs[index].selectValue}
                            itemsData={[
                              {
                                items: allOptions2.map(option => ({ label: option })),
                              },
                            ]}
                            name={`pairs.${index}.selectValue`}
                            onChange={e => {
                              arrayHelpers.replace(index, {
                                ...pair,
                                selectValue: e.target.value,
                              })
                            }}
                            setFieldValue={setFieldValue}
                            title={'Категории поиска'}
                            variant={'primary'}
                          />
                          <Input
                            name={`pairs.${index}.inputValue`}
                            onChange={handleChange}
                            value={pair.inputValue}
                          />
                        </div>
                      ))}
                      <div className={s.buttons}>
                        {values.pairs.length < allOptions2.length && (
                          <Button
                            onClick={() =>
                              arrayHelpers.push({
                                inputValue: '',
                                selectValue: '',
                              })
                            }
                            type={'button'}
                          >
                            Добавить поле
                          </Button>
                        )}
                        <Button onClick={handleSubmit} type={'submit'}>
                          Поиск <Search />
                        </Button>
                      </div>
                    </div>
                  )}
                ></FieldArray>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {data.data.children.length > 0 && (
        <div className={s.dashboard}>
          <div>
            <div>Направление: {data.title}</div>
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
          <div>
            <CirclePacking data={data.data} padding={8} />
          </div>
        </div>
      )}
    </div>
  )
}
