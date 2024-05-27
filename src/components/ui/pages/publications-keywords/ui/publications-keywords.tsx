import { useState } from 'react'

import { SelectedValue, data } from '@/common/data'
import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector.ts'
import { Button } from '@/components/ui/components/button'
import { ChartSection } from '@/components/ui/components/chart-section'
import { DashboardButton } from '@/components/ui/components/dashboard-button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { LineGraph } from '@/components/ui/diagrams/line-graph'
import { pubKeywordsSliceActions } from '@/components/ui/pages/publications-keywords'
import { publicationsKeywordsSelectors } from '@/components/ui/pages/publications-keywords/model/publications-keywords-selectors.ts'
import { Search } from '@/icons'
import { FieldArray, Form, Formik } from 'formik'

import s from './publications-keywords.module.scss'

const buttonConfigs = [
  { title: 'По странам', value: 'countries' },
  { title: 'По годам', value: 'years' },
]

export const PublicationsKeywords = () => {
  const { fetchPublicationData } = useActions(pubKeywordsSliceActions)
  const [type, setType] = useState<SelectedValue>('countries')
  const data1 = useAppSelector(publicationsKeywordsSelectors)

  console.log(data1.citationsData)

  const [value, setValue] = useState('')
  const allOptions = ['Аффиляция ROR']
  const changeSelectedValue = (value: SelectedValue) => {
    setType(value)
  }
  const currentYear = new Date().getFullYear()
  const endYear = Array.from({ length: currentYear - 2012 + 1 }, (_, i) => ({
    label: (currentYear - i).toString(),
  }))
  const startYear = Array.from({ length: 2024 - 2012 + 1 }, (_, i) => ({
    label: (2012 + i).toString(),
  }))

  return (
    <div>
      <div className={s.dashboard}>
        <div className={s.title}>
          <h2>Издания: анализ публикаций и ключевых слов</h2>
        </div>
        <div className={s.menuSwitchItems}>
          {buttonConfigs.map(config => (
            <DashboardButton
              currentType={type}
              key={config.value}
              onChange={changeSelectedValue}
              title={config.title}
              value={config.value as SelectedValue}
            />
          ))}
        </div>
        {type === 'countries' && (
          <div>
            <Formik
              initialValues={{ endYear: '', id: '', startYear: '' }}
              onSubmit={values => {
                alert(JSON.stringify(values, null, 2))
              }}
            >
              {({ handleChange, handleSubmit, setFieldValue, values }) => (
                <Form>
                  <div className={s.form}>
                    <Input
                      name={'id'}
                      onChange={handleChange}
                      placeholder={'ID направления'}
                      value={values.id}
                    />
                    <SelectButton
                      activeValueName={values.startYear}
                      itemsData={[{ items: startYear }]}
                      name={'startYear'}
                      onChange={e => setFieldValue('startYear', e)}
                      setFieldValue={setFieldValue}
                      title={'Год начала'}
                      variant={'primary'}
                    />
                    <SelectButton
                      activeValueName={values.endYear}
                      itemsData={[{ items: endYear }]}
                      name={'endYear'}
                      onChange={e => setFieldValue('endYear', e)}
                      setFieldValue={setFieldValue}
                      title={'Конечный период'}
                      variant={'primary'}
                    />
                    <div className={s.buttons}>
                      <Button onClick={handleSubmit} type={'submit'}>
                        Поиск <Search />
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
        {type === 'years' && (
          <div>
            <Formik
              initialValues={{ countries: [''], endYear: '', ids: [''], startYear: '' }}
              onSubmit={values => {
                alert(JSON.stringify(values, null, 2))
                fetchPublicationData(values.ids)
              }}
            >
              {({ handleChange, handleSubmit, setFieldValue, values }) => (
                <Form>
                  <div className={s.form}>
                    <FieldArray name={'fields'}>
                      {({ push, remove }) => (
                        <>
                          {values.ids.map((id, index) => (
                            <div className={s.fieldRow} key={index}>
                              <Input
                                name={`ids[${index}]`}
                                onChange={handleChange}
                                placeholder={`ID направления ${index + 1}`}
                                value={id || ''}
                              />
                              <Input
                                name={`countries[${index}]`}
                                onChange={handleChange}
                                placeholder={`Код Страны ${index + 1}`}
                                value={values.countries[index] || ''}
                              />
                              {index > 0 && (
                                <Button
                                  onClick={() => {
                                    remove(index)
                                    setFieldValue(
                                      `ids`,
                                      values.ids.filter((_, i) => i !== index)
                                    )
                                    setFieldValue(
                                      `countries`,
                                      values.countries.filter((_, i) => i !== index)
                                    )
                                  }}
                                  type={'button'}
                                  variant={'primary'}
                                >
                                  Удалить
                                </Button>
                              )}
                            </div>
                          ))}
                          <Button
                            onClick={() => {
                              push('')
                              setFieldValue('ids', [...values.ids, ''])
                              setFieldValue('countries', [...values.countries, ''])
                            }}
                            type={'button'}
                            variant={'primary'}
                          >
                            Добавить поле
                          </Button>
                        </>
                      )}
                    </FieldArray>
                    <SelectButton
                      activeValueName={values.startYear}
                      itemsData={[{ items: startYear }]}
                      name={'startYear'}
                      onChange={e => setFieldValue('startYear', e)}
                      setFieldValue={setFieldValue}
                      title={'Год начала'}
                      variant={'primary'}
                    />
                    <SelectButton
                      activeValueName={values.endYear}
                      itemsData={[{ items: endYear }]}
                      name={'endYear'}
                      onChange={e => setFieldValue('endYear', e)}
                      setFieldValue={setFieldValue}
                      title={'Конечный период'}
                      variant={'primary'}
                    />
                    <div className={s.buttons}>
                      <Button onClick={handleSubmit} type={'submit'}>
                        Поиск <Search />
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
      <div>
        {type === 'years' && (
          <ChartSection data={data} title={'lala' || ''}>
            <LineGraph data={data1.citationsData} isTooltip points variant={'catmullRom'} />
          </ChartSection>
        )}
      </div>
    </div>
  )
}
