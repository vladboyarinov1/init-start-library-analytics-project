import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { Button } from '@/components/ui/components/button'
import { ChartSection } from '@/components/ui/components/chart-section'
import { Circular } from '@/components/ui/components/circular'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { LineGraph } from '@/components/ui/diagrams/line-graph'
import { dynamicsSliceActions } from '@/components/ui/pages/dynamics'
import { dynamicsSelectors } from '@/components/ui/pages/dynamics/model/dynamics-selectors'
import { Search } from '@/icons'
import { FieldArray, Form, Formik, FormikErrors, FormikTouched } from 'formik'
import * as Yup from 'yup'

import s from './dynamics.module.scss'

export const Dynamics = () => {
  const { fetchData } = useActions(dynamicsSliceActions)
  const data = useAppSelector(dynamicsSelectors)

  const currentYear = new Date().getFullYear()
  const endYear = Array.from({ length: currentYear - 2012 + 1 }, (_, i) => ({
    label: (currentYear - i).toString(),
  }))
  const startYear = Array.from({ length: 2024 - 2012 + 1 }, (_, i) => ({
    label: (2012 + i).toString(),
  }))
  const validationSchema = Yup.object().shape({
    authorId: Yup.array().of(Yup.string().required('Author ID is required')),
    endYear: Yup.string().required('End year is required'),
    ror: Yup.array().of(Yup.string().required('ROR is required')),
    sourcesId: Yup.array().of(Yup.string().required('Source ID is required')),
    startYear: Yup.string().required('Start year is required'),
    type: Yup.string().required('Type is required'),
  })

  return (
    <div>
      <Circular />
      <div className={s.dashboard}>
        <div className={s.title}>
          <h2>Динамика публикаций/цитирований</h2>
        </div>
        <Formik
          initialValues={{
            authorId: ['a5055075513'],
            endYear: '2016',
            ror: ['I45812101'],
            sourcesId: ['3At10097'],
            startYear: '',
            type: 'Количество публикаций',
          }}
          onSubmit={values => {
            alert(JSON.stringify(values))
            fetchData({
              authorId: values.authorId,
              endYear: values.endYear,
              ror: values.ror,
              sourcesId: values.sourcesId,
              startYear: values.startYear,
            })
          }}
          validationSchema={validationSchema}
        >
          {({ errors, handleChange, handleSubmit, setFieldValue, touched, values }) => {
            const typedErrors: any = errors as FormikErrors<FormValues>
            const typedTouched: any = touched as FormikTouched<FormValues>

            return (
              <Form className={s.formik_form}>
                {Object.keys(typedErrors).length > 0 && Object.keys(typedTouched).length > 0 && (
                  <div className={s.error_title}>Заполните все обязательные поля!</div>
                )}
                <div className={s.form_years}>
                  <div className={s.initialRow}>
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
                    <Input
                      error={Boolean(typedErrors.ror?.[0] && typedTouched.ror?.[0])}
                      name={`ror[0]`}
                      onChange={handleChange}
                      placeholder={`lineage Id`}
                      value={values.ror[0] || ''}
                    />
                    <Input
                      name={`authorId[0]`}
                      onChange={handleChange}
                      placeholder={`ID автора`}
                      value={values.authorId[0] || ''}
                    />
                    <Input
                      name={`sourcesId[0]`}
                      onChange={handleChange}
                      placeholder={`ID издания`}
                      value={values.sourcesId[0] || ''}
                    />
                  </div>
                  <FieldArray name={'fields'}>
                    {({ push }) => (
                      <>
                        <div className={s.wrapper}>
                          {values.ror.slice(1).map((i, index) => (
                            <div className={s.fieldRow} key={index}>
                              <Input
                                error={Boolean(
                                  typedErrors.ror?.[index + 1] && typedTouched.ror?.[index + 1]
                                )}
                                name={`ror[${index + 1}]`}
                                onChange={handleChange}
                                placeholder={`lineage Id ${index + 2}`}
                                value={i || ''}
                              />
                              <Input
                                error={Boolean(
                                  typedErrors.authorId?.[index + 1] &&
                                    typedTouched.authorId?.[index + 1]
                                )}
                                name={`authorId[${index + 1}]`}
                                onChange={handleChange}
                                placeholder={`ID автора ${index + 2}`}
                                value={values.authorId[index + 1] || ''}
                              />
                              <Input
                                error={Boolean(
                                  typedErrors.sourcesId?.[index + 1] &&
                                    typedTouched.sourcesId?.[index + 1]
                                )}
                                name={`sourcesId[${index + 1}]`}
                                onChange={handleChange}
                                placeholder={`ID издания ${index + 2}`}
                                value={values.sourcesId[index + 1] || ''}
                              />
                              {/* Uncomment to enable removal of fields */}
                              {/* {index > 0 && (
                          <Button
                            onClick={() => {
                              remove(index + 1);
                              setFieldValue(
                                `ids`,
                                values.ids.filter((_, i) => i !== index + 1)
                              );
                              setFieldValue(
                                `countries`,
                                values.countries.filter((_, i) => i !== index + 1)
                              );
                            }}
                            type={'button'}
                            variant={'primary'}
                          >
                            Удалить
                          </Button>
                        )} */}
                            </div>
                          ))}
                        </div>
                        <div className={s.buttons}>
                          {values.ror.length < 4 && (
                            <Button
                              onClick={() => {
                                push('')
                                setFieldValue('ror', [...values.ror, ''])
                                setFieldValue('authorId', [...values.authorId, ''])
                                setFieldValue('sourcesId', [...values.sourcesId, ''])
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
      {data.data.length > 0 && (
        <ChartSection data={data.data} title={'Количество изданий по издательствам'}>
          <LineGraph data={data.data} isTooltip legend />
        </ChartSection>
      )}
    </div>
  )
}
interface FormValues {
  authorId: string[]
  endYear: string
  ror: string[]
  sourcesId: string[]
  startYear: string
  type: string
}
