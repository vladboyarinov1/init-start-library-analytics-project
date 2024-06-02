import { useActions } from '@/common/hooks/use-actions'
import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { Search } from '@/icons'
import { FieldArray, Form, Formik, FormikErrors, FormikTouched } from 'formik'
import * as Yup from 'yup'

import s from '@/components/ui/pages/publications-keywords/ui/publications-keywords.module.scss'

const validationSchema = Yup.object().shape({
  ids: Yup.array().of(Yup.string().required('ID направления обязательно')),
  types: Yup.array().of(Yup.string().required('Тип публикации обязателен')),
})

interface FormValues {
  ids: string[]
  types: string[]
}

export const Continents = () => {
  const { fetchTreeMapData } = useActions(editionsPubKeyAnalysisActions)

  return (
    <div>
      <Formik<FormValues>
        initialValues={{ ids: [''], types: [''] }}
        onSubmit={values => {
          fetchTreeMapData({
            ids: values.ids,
            types: values.types,
          })
        }}
        validationSchema={validationSchema}
      >
        {({ errors, handleChange, handleSubmit, touched, values }) => {
          // Type assertion for errors and touched
          const typedErrors = errors as FormikErrors<FormValues>
          const typedTouched: any = touched as FormikTouched<FormValues>

          return (
            <Form className={s.formik_form}>
              {Object.keys(typedErrors).length > 0 && Object.keys(typedTouched).length > 0 && (
                <div className={s.error_title}>Заполните все обязательные поля!</div>
              )}
              <div className={s.form_years}>
                <div className={s.countriesRow}>
                  <Input
                    error={Boolean(typedErrors.ids?.[0] && typedTouched.ids?.[0])}
                    name={`ids[0]`}
                    onChange={handleChange}
                    placeholder={`ID направления 1`}
                    value={values.ids[0] || ''}
                  />
                  <Input
                    error={Boolean(typedErrors.types?.[0] && typedTouched.types?.[0])}
                    name={`types[0]`}
                    onChange={handleChange}
                    placeholder={`Тип публикации 1`}
                    value={values.types[0] || ''}
                  />
                </div>
                <FieldArray name={'ids'}>
                  {({ push }) => (
                    <>
                      <div className={s.wrapper}>
                        {values.ids.slice(1).map((id, index) => (
                          <div className={s.fieldRow} key={index}>
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
                                typedErrors.types?.[index + 1] && typedTouched.types?.[index + 1]
                              )}
                              name={`types[${index + 1}]`}
                              onChange={handleChange}
                              placeholder={`Тип публикации ${index + 2}`}
                              value={values.types[index + 1] || ''}
                            />
                          </div>
                        ))}
                      </div>
                      <div className={s.buttons}>
                        {values.ids.length < 4 && (
                          <Button
                            onClick={() => {
                              push('')
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
  )
}
