import { useState } from 'react'

import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { BarChar } from '@/components/ui/diagrams/bar-chart'
import { PieChart } from '@/components/ui/diagrams/pie-chart'
import { TreeMap } from '@/components/ui/diagrams/tree-map'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { editionsPubKeyAnalysisSelectors } from '@/components/ui/pages/editions-pub-key-analysis-api/model/editions-pub-key-analysis-selectors'
import { BarChartData, treeMapData } from '@/data'
import { Search } from '@/icons'
import { Form } from 'antd'
import { FieldArray, Formik } from 'formik'

import s from './editions-pub-key-analysis-api.module.scss'

export const EditionsPubKeyAnalysisApi = () => {
  const data = useAppSelector(editionsPubKeyAnalysisSelectors)

  type SelectedValue = 'OA' | 'continents' | 'countries' | 'publications' | 'publishing' | 'types'

  const [type, setType] = useState<SelectedValue>('publications')

  const { fetchData, fetchPieChartData } = useActions(editionsPubKeyAnalysisActions)
  // const fetchDataHandler = (iso: string, type: string) => {
  //   fetchData({ iso, type })
  // }
  const changeSelectedValue = (value: SelectedValue) => {
    setType(value)
  }
  const renderDashboardButton = (title: string, value: SelectedValue) => {
    return (
      <button
        className={type === `${value}` ? s.activeBtn : s.button}
        onClick={() => {
          changeSelectedValue(value)
        }}
      >
        {title}
      </button>
    )
  }
  const allOptions = ['ID направления', 'Код страны', 'Издатель']

  return (
    <div>
      <div className={s.dashboard}>
        <div className={s.title}>
          <h2>Издания: анализ публикаций и ключевых слов</h2>
        </div>
        <div className={s.menuSwitchItems}>
          {renderDashboardButton('По публикациям', 'publications')}
          {renderDashboardButton('По издательствам', 'publishing')}
          {renderDashboardButton('По типам', 'types')}
          {renderDashboardButton('OA', 'OA')}
          {renderDashboardButton('По странам', 'countries')}
          {renderDashboardButton('По континентам', 'continents')}
        </div>
        {type === 'publishing' && <div>publishing</div>}
        {type === 'OA' && <div>OA</div>}
        {type === 'countries' && <div>countries</div>}
        {type === 'continents' && <div>continents</div>}
        <div>
          {type === 'publications' && (
            <Formik
              initialValues={{ iso: 'BY', type: '' }}
              onSubmit={values => {
                fetchData({ iso: values.iso, type: values.type })
              }}
            >
              {({ handleBlur, handleChange, handleSubmit, setFieldValue, values }) => (
                <Form className={s.form}>
                  <SelectButton
                    activeValueName={values.type}
                    itemsData={[
                      {
                        items: [
                          { label: 'journal' },
                          { label: 'ebook platform' },
                          { label: 'conference' },
                          { label: 'repository' },
                        ],
                      },
                    ]}
                    name={'type'}
                    setFieldValue={setFieldValue}
                    title={'Тип издания'}
                    variant={'primary'}
                  />
                  <Input
                    name={'iso'}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={'ID автора'}
                    required
                    type={'text'}
                    value={values.iso}
                  />
                  {/*{errors.email && touched.email && errors.email}*/}
                  <Button onClick={handleSubmit} type={'submit'}>
                    Поиск <Search />
                  </Button>
                </Form>
              )}
            </Formik>
          )}

          {/*
          <Formik
            initialValues={{ pairs: [{ inputValue: '', selectValue: '' }] }}
            onSubmit={(values, actions) => {
              // Обработка отправки данных, например, через API запрос
              console.log('Отправка данных:', values.pairs)
              actions.setSubmitting(false)
            }}
          >
            {({ handleSubmit, values }) => (
              <Form>
                <FieldArray
                  name={'pairs'}
                  render={arrayHelpers => (
                    <div>
                      {values.pairs.map((pair, index) => (
                        <div key={index}>
                          <Field as={'select'} name={`pairs.${index}.selectValue`}>
                            <option disabled={!pair.selectValue} value={''}>
                              {' '}
                              {pair.selectValue ? pair.selectValue : 'Выберите'}
                            </option>
                            {allOptions.map(option => {
                              if (!values.pairs.find(p => p.selectValue === option)) {
                                return (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                )
                              }

                              return null
                            })}
                          </Field>
                          <Field name={`pairs.${index}.inputValue`} />
                          {index > 0 && ( // Показываем кнопку "Удалить поле" только для индекса больше 0
                            <button onClick={() => arrayHelpers.remove(index)} type={'button'}>
                              Удалить поле
                            </button>
                          )}
                        </div>
                      ))}
                      {values.pairs.length < allOptions.length && (
                        <button
                          onClick={() => arrayHelpers.push({ inputValue: '', selectValue: '' })}
                          type={'button'}
                        >
                          Добавить поле
                        </button>
                      )}
                    </div>
                  )}
                />
                <button onClick={handleSubmit} type={'submit'}>
                  Отправить
                </button>
              </Form>
            )}
          </Formik>*/}
          {type === 'types' && (
            <div>
              <Formik
                initialValues={{ pairs: [{ inputValue: '', selectValue: '' }] }}
                onSubmit={values => {
                  // fetchData({ iso: values.iso, type: values.type })
                  console.log(values)
                  alert(JSON.stringify(values, null, 2))
                  fetchPieChartData(values.pairs)
                }}
              >
                {({ handleChange, handleSubmit, setFieldValue, values }) => (
                  <Form>
                    <FieldArray
                      name={'pairs'}
                      render={arrayHelpers => (
                        <div>
                          {values.pairs.map((pair, index) => (
                            <div className={s.form} key={index}>
                              <SelectButton
                                activeValueName={values.pairs[index].selectValue}
                                itemsData={[
                                  {
                                    items: allOptions
                                      // .filter(
                                      //   option => !values.pairs.some(p => p.selectValue === option)
                                      // ) // Фильтруем заголовки
                                      .map(option => ({ label: option })), // Преобразуем строки в объекты с свойством label
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
                          <Button onClick={handleSubmit} type={'submit'}>
                            Отправить
                          </Button>
                          {values.pairs.length < allOptions.length && (
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
                        </div>
                      )}
                    ></FieldArray>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      </div>
      {type === 'publications' && (
        <div>
          {data.publicationsData.length ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              <div style={{ backgroundColor: 'white', borderRadius: 12, padding: 10, width: 560 }}>
                <h2>Количество публикаций</h2>
                <PieChart data={data.publicationsData} />
              </div>
              <div style={{ backgroundColor: 'white', borderRadius: 12, padding: 10, width: 560 }}>
                <h2>Количество цитирований</h2>
                <PieChart data={data.citationsData} />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )}
      {type === 'publishing' && (
        <div style={{ backgroundColor: 'white', borderRadius: 12, margin: '0 20px', padding: 10 }}>
          <BarChar data={BarChartData} />
        </div>
      )}
      {type === 'types' && (
        <div>
          <PieChart data={data.pieChartData} />
        </div>
      )}
      {type === 'OA' && <div>OA</div>}
      {type === 'countries' && <div>countries</div>}
      {type === 'continents' && (
        <div>
          <div
            style={{ backgroundColor: 'white', borderRadius: 12, margin: '0 20px', padding: 10 }}
          >
            <TreeMap data={treeMapData} />
          </div>
        </div>
      )}
    </div>
  )
}
//{/*<SelectButton*/}
//                       {/*  activeValueName={values.filter}*/}
//                       {/*  itemsData={[*/}
//                       {/*    {*/}
//                       {/*      items: [*/}
//                       {/*        { label: 'ID направления' },*/}
//                       {/*        { label: 'Код страны' },*/}
//                       {/*        { label: 'Издатель' },*/}
//                       {/*      ],*/}
//                       {/*    },*/}
//                       {/*  ]}*/}
//                       {/*  name={'filter'}*/}
//                       {/*  setFieldValue={setFieldValue}*/}
//                       {/*  title={'Категории поиска'}*/}
//                       {/*  variant={'primary'}*/}
//                       {/*/>*/}
//                       {/*<Input*/}
//                       {/*  name={'iso'}*/}
//                       {/*  onBlur={handleBlur}*/}
//                       {/*  onChange={handleChange}*/}
//                       {/*  placeholder={'ID автора'}*/}
//                       {/*  required*/}
//                       {/*  type={'text'}*/}
//                       {/*  value={values.iso}*/}
//                       {/*/>*/}
//                       {/*{errors.email && touched.email && errors.email}*/}
//                       {/*<Button disabled={isSubmitting} type={'submit'}>*/}
//                       {/*  Поиск <Search />*/}
//                       {/*</Button>*/}
