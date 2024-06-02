import { useState } from 'react'

import { SelectedValue } from '@/common/data'
import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { Button } from '@/components/ui/components/button'
import { ChartSection } from '@/components/ui/components/chart-section'
import { Circular } from '@/components/ui/components/circular'
import { DashboardButton } from '@/components/ui/components/dashboard-button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { BarChar } from '@/components/ui/diagrams/bar-chart'
import { LineGraph } from '@/components/ui/diagrams/line-graph'
import { pubKeywordsSliceActions } from '@/components/ui/pages/publications-keywords'
import { publicationsKeywordsSelectors } from '@/components/ui/pages/publications-keywords/model/publications-keywords-selectors'
import { Search } from '@/icons'
import { CloseOutlined } from '@ant-design/icons'
import { Button as AntButton } from 'antd'
import { FieldArray, Form, Formik, FormikErrors, FormikTouched } from 'formik'
import * as Yup from 'yup'

import s from './publications-keywords.module.scss'

const buttonConfigs = [
  { title: 'По странам', value: 'countries' },
  { title: 'По годам', value: 'years' },
]
const validationSchemaByYears = Yup.object().shape({
  countries: Yup.array().of(Yup.string().required('Countries ID is required')),
  endYear: Yup.string().required('End year is required'),
  ids: Yup.array().of(Yup.string().required('ids is required')),
  startYear: Yup.string().required('Start year is required'),
})
const validationSchema = Yup.object().shape({
  endYear: Yup.string().required('End year is required'),
  id: Yup.string().required('id is required'),
  startYear: Yup.string().required('Start year is required'),
})

export const PublicationsKeywords = () => {
  const { fetchCountriesData, fetchPublicationData } = useActions(pubKeywordsSliceActions)
  const [type, setType] = useState<SelectedValue>('countries')
  const data = useAppSelector(publicationsKeywordsSelectors)

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
      <Circular />
      <div className={s.dashboard}>
        <div className={s.title}>
          <h2>Публикации по ключевым словам</h2>
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
                fetchCountriesData({
                  endYear: values.endYear,
                  id: values.id,
                  startYear: values.startYear,
                })
              }}
              validationSchema={validationSchema}
            >
              {({ errors, handleChange, handleSubmit, setFieldValue, touched, values }) => (
                <Form>
                  <div className={s.form}>
                    <Input
                      error={errors.id && touched.id}
                      name={'id'}
                      onChange={handleChange}
                      placeholder={'ID направления'}
                      value={values.id}
                    />
                    <SelectButton
                      activeValueName={values.startYear}
                      error={errors.startYear && touched.startYear}
                      itemsData={[{ items: startYear }]}
                      name={'startYear'}
                      onChange={e => setFieldValue('startYear', e)}
                      setFieldValue={setFieldValue}
                      title={'Год начала'}
                      variant={'primary'}
                    />
                    <SelectButton
                      activeValueName={values.endYear}
                      error={errors.endYear && touched.endYear}
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
                fetchPublicationData({
                  countries: values.countries,
                  endYear: values.endYear,
                  ids: values.ids,
                  startYear: values.startYear,
                })
              }}
              validationSchema={validationSchemaByYears}
            >
              {({ errors, handleChange, handleSubmit, setFieldValue, touched, values }) => {
                const typedErrors: any = errors as FormikErrors<FormValues>
                const typedTouched: any = touched as FormikTouched<FormValues>

                return (
                  <Form>
                    <div className={s.form_years}>
                      <div className={s.initialRow}>
                        <Input
                          error={Boolean(typedErrors.ids?.[0] && typedTouched.ids?.[0])}
                          name={`ids[0]`}
                          onChange={handleChange}
                          placeholder={`ID направления 1`}
                          value={values.ids[0] || ''}
                        />
                        <Input
                          error={Boolean(typedErrors.countries?.[0] && typedTouched.countries?.[0])}
                          name={`countries[0]`}
                          onChange={handleChange}
                          placeholder={`Код страны 1`}
                          value={values.countries[0] || ''}
                        />
                        <SelectButton
                          activeValueName={values.startYear}
                          error={errors.startYear && touched.startYear}
                          itemsData={[{ items: startYear }]}
                          name={'startYear'}
                          onChange={e => setFieldValue('startYear', e)}
                          setFieldValue={setFieldValue}
                          title={'Год начала'}
                          variant={'primary'}
                        />
                        <SelectButton
                          activeValueName={values.endYear}
                          error={errors.endYear && touched.endYear}
                          itemsData={[{ items: endYear }]}
                          name={'endYear'}
                          onChange={e => setFieldValue('endYear', e)}
                          setFieldValue={setFieldValue}
                          title={'Конечный период'}
                          variant={'primary'}
                        />
                      </div>
                      <FieldArray name={'fields'}>
                        {({ push, remove }) => (
                          <>
                            <div className={s.wrapper}>
                              {values.ids.slice(1).map((id, index) => (
                                <div className={s.fieldRow} key={`${id}-${index + 1}`}>
                                  <Input
                                    error={Boolean(
                                      typedErrors.ids?.[index + 1] && typedTouched.ids?.[index + 1]
                                    )}
                                    name={`ids[${index + 1}]`}
                                    onChange={handleChange}
                                    placeholder={`ID направления ${index + 2}`}
                                    value={id || ''}
                                  />
                                  <Input
                                    error={Boolean(
                                      typedErrors.countries?.[index + 1] &&
                                        typedTouched.countries?.[index + 1]
                                    )}
                                    name={`countries[${index + 1}]`}
                                    onChange={handleChange}
                                    placeholder={`Код страны ${index + 2}`}
                                    value={values.countries[index + 1] || ''}
                                  />
                                  <AntButton
                                    icon={<CloseOutlined />}
                                    onClick={() => {
                                      remove(index + 1)
                                      setFieldValue(
                                        `ids`,
                                        values.ids.filter((_, i) => i !== index + 1)
                                      )
                                      setFieldValue(
                                        `countries`,
                                        values.countries.filter((_, i) => i !== index + 1)
                                      )
                                    }}
                                    style={{ color: 'var(--color-green-hover)' }}
                                    type={'text'}
                                  ></AntButton>
                                </div>
                              ))}
                            </div>
                            <div className={s.buttons}>
                              {values.ids.length < 4 && (
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
                              )}
                              <Button onClick={handleSubmit} type={'submit'}>
                                Поиск <Search />
                              </Button>
                            </div>
                          </>
                        )}
                      </FieldArray>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
        )}
      </div>
      <div>
        {type === 'years' && data.linearData.length > 0 && (
          <ChartSection data={data.linearData} title={'Количество изданий по издательствам'}>
            <LineGraph data={data.linearData} isTooltip points variant={'catmullRom'} />
          </ChartSection>
        )}
        {type === 'countries' && data.countries.data.length > 0 && (
          <ChartSection data={data.countries.exportData} title={'По странам'}>
            <BarChar data={data.countries.data} />
          </ChartSection>
        )}
      </div>
    </div>
  )
}
interface FormValues {
  countries: string[]
  endYear: string
  ids: string[]
  startYear: string
}
