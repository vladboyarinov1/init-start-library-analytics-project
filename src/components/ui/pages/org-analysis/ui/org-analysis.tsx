import { useState } from 'react'

import { SelectedValue } from '@/common/data'
import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { Button } from '@/components/ui/components/button'
import { ChartSection } from '@/components/ui/components/chart-section'
import { Circular } from '@/components/ui/components/circular'
import { DashboardButton } from '@/components/ui/components/dashboard-button'
import { ErrorSnackbar } from '@/components/ui/components/error-snackbar'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { CirclePacking } from '@/components/ui/diagrams/circle-packing'
import { RadialBar } from '@/components/ui/diagrams/radial-bar'
import { orgAnalysisSliceActions } from '@/components/ui/pages/org-analysis'
import { orgAnalysisSelectors } from '@/components/ui/pages/org-analysis/model/org-analysis-selectors'
import { Search } from '@/icons'
import { Field, FieldArray, Form, Formik } from 'formik'
import * as Yup from 'yup'

import s from './org-analysis.module.scss'

const buttonConfigs = [
  { title: 'По публикациям', value: 'publications' },
  { title: 'По ключевым словам', value: 'keyword' },
]

const currentYear = new Date().getFullYear()
const endYear = Array.from({ length: currentYear - 2012 + 1 }, (_, i) => ({
  label: (currentYear - i).toString(),
}))
const startYear = Array.from({ length: 2024 - 2012 + 1 }, (_, i) => ({
  label: (2012 + i).toString(),
}))

const validationSchemaPublications = Yup.object().shape({
  endYear: Yup.string().required('Конечный год обязателен'),
  iso: Yup.string().required('Код страны обязателен'),
  startYear: Yup.string().required('Год начала обязателен'),
  type: Yup.string().required('Тип обязателен'),
})

const validationSchemaKeyword = Yup.object().shape({
  pairs: Yup.array().of(
    Yup.object().shape({
      inputValue: Yup.string().required('Значение ROR обязательно'),
      selectValue: Yup.string().required('Категория поиска обязательна'),
    })
  ),
})

export const OrgAnalysis = () => {
  const { fetchCirclePacking, fetchData } = useActions(orgAnalysisSliceActions)
  const data = useAppSelector(orgAnalysisSelectors)
  const [type, setType] = useState<SelectedValue>('publications')
  const [value, setValue] = useState('')
  const allOptions = ['Аффиляция ROR']
  const changeSelectedValue = (value: SelectedValue) => {
    setType(value)
  }

  return (
    <div>
      <Circular />
      <ErrorSnackbar />
      <div className={s.dashboard}>
        <div className={s.title}>
          <h2>Организации: анализ публикаций</h2>
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
        {type === 'publications' && (
          <div>
            <Formik
              initialValues={{ endYear: '2024', iso: '', startYear: '', type: '' }}
              onSubmit={values => {
                fetchData({
                  endYear: +values.endYear,
                  iso: values.iso,
                  startYear: +values.startYear,
                  type: values.type,
                })
              }}
              validationSchema={validationSchemaPublications}
            >
              {({ errors, handleChange, handleSubmit, setFieldValue, touched, values }) => (
                <Form className={s.formik_form}>
                  {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
                    <div className={s.error_title}>Заполните все обязательные поля!</div>
                  )}
                  <div className={s.form}>
                    <SelectButton
                      activeValueName={values.type}
                      error={errors.type && touched.type}
                      itemsData={[{ items: [{ label: 'government' }, { label: 'education' }] }]}
                      name={'type'}
                      onChange={e => setFieldValue('type', e)}
                      setFieldValue={setFieldValue}
                      title={'Тип'}
                      variant={'primary'}
                    />
                    <Input
                      error={errors.iso && touched.iso}
                      name={'iso'}
                      onChange={handleChange}
                      placeholder={'Код страны'}
                      required
                      value={values.iso}
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
                      title={'Конечный год'}
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
        {type === 'keyword' && (
          <div>
            <Formik
              initialValues={{ pairs: [{ inputValue: '040a2r459', selectValue: 'Аффиляция ROR' }] }}
              onSubmit={values => {
                fetchCirclePacking(values.pairs)
              }}
              validationSchema={validationSchemaKeyword}
            >
              {({ errors, handleChange, handleSubmit, setFieldValue, touched, values }) => (
                <Form className={s.formik_form}>
                  {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
                    <div className={s.error_title}>Заполните все обязательные поля!</div>
                  )}
                  <FieldArray
                    name={'pairs'}
                    render={arrayHelpers => (
                      <div>
                        {values.pairs.map((pair, index) => (
                          <div className={s.item} key={index}>
                            <SelectButton
                              activeValueName={values.pairs[index].selectValue || ''}
                              error={
                                errors?.pairs?.[index]?.selectValue &&
                                touched?.pairs?.[index]?.selectValue
                              }
                              itemsData={[
                                {
                                  items: allOptions.map(option => ({
                                    label: option,
                                    value: option,
                                  })),
                                },
                              ]}
                              name={`pairs.${index}.selectValue`}
                              onChange={value => {
                                arrayHelpers.replace(index, {
                                  ...pair,
                                  selectValue: value,
                                })
                              }}
                              setFieldValue={setFieldValue}
                              title={'Категории поиска'}
                              variant={'primary'}
                            />
                            <Input
                              error={
                                errors?.pairs?.[index]?.inputValue &&
                                touched?.pairs?.[index]?.inputValue
                              }
                              name={`pairs.${index}.inputValue`}
                              onChange={handleChange}
                              placeholder={'Введите значение ROR'}
                              required
                              value={pair.inputValue}
                            />
                            <div className={s.buttons}>
                              <Button onClick={handleSubmit} type={'submit'}>
                                Поиск <Search />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  ></FieldArray>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
      <div>
        {type === 'publications' && data.citationsData.length > 0 ? (
          <div>
            <div className={s.exportBtn}>
              <SelectButton
                activeValueName={value}
                data={data.citationsData}
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
            <div className={s.wrapper}>
              <div className={s.wrapper__items}>
                <h2>Количество публикаций</h2>
                <RadialBar data={data.publicationsData} />
              </div>
              <div className={s.wrapper__items}>
                <h2>Количество цитирований</h2>
                <RadialBar data={data.citationsData} />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        {type === 'keyword' && Object.keys(data.circlePacking.data).length > 0 && (
          <ChartSection data={data.circlePacking.data} title={data.circlePacking.title || ''}>
            <CirclePacking data={data.circlePacking.data} padding={8} />
          </ChartSection>
        )}
      </div>
    </div>
  )
}
