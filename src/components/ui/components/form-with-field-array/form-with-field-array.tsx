import React from 'react'

import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { Search } from '@/icons'
import { FieldArray, Form, Formik, FormikErrors, FormikTouched } from 'formik'
import * as Yup from 'yup'

import s from './form-with-field-array.module.scss'

type FormWithFieldArrayProps = {
  allOptions: string[]
  onSubmit: (pairs: { inputValue: string; selectValue: string }[]) => void
}

interface FormValues {
  pairs: {
    inputValue: string
    selectValue: string
  }[]
}

const validationSchema = Yup.object().shape({
  pairs: Yup.array().of(
    Yup.object().shape({
      inputValue: Yup.string().required('Input value is required'),
      selectValue: Yup.string().required('Select value is required'),
    })
  ),
})

export const FormWithFieldArray: React.FC<FormWithFieldArrayProps> = ({ allOptions, onSubmit }) => {
  return (
    <div>
      <Formik<FormValues>
        initialValues={{ pairs: [{ inputValue: '', selectValue: '' }] }}
        onSubmit={values => {
          onSubmit(values.pairs)
        }}
        validationSchema={validationSchema}
      >
        {({ errors, handleChange, handleSubmit, setFieldValue, touched, values }) => {
          // Type assertion for errors and touched
          const typedErrors: any = errors as FormikErrors<FormValues>
          const typedTouched: any = touched as FormikTouched<FormValues>

          const getAvailableOptions = (index: number) => {
            const selectedValues = values.pairs.map(pair => pair.selectValue)

            return allOptions.filter(
              option =>
                !selectedValues.includes(option) || option === values.pairs[index].selectValue
            )
          }

          return (
            <Form className={s.formik_form}>
              {Object.keys(typedErrors).length > 0 && Object.keys(typedTouched).length > 0 && (
                <div className={s.error_title}>Заполните все обязательные поля!</div>
              )}
              <FieldArray
                name={'pairs'}
                render={arrayHelpers => (
                  <div className={s.form}>
                    {values.pairs.map((pair, index) => (
                      <div className={s.item} key={index}>
                        <SelectButton
                          activeValueName={values.pairs[index].selectValue || ''}
                          error={Boolean(
                            typedErrors.pairs?.[index]?.selectValue &&
                              typedTouched.pairs?.[index]?.selectValue
                          )}
                          itemsData={[
                            {
                              items: getAvailableOptions(index).map(option => ({
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
                          error={Boolean(
                            typedErrors.pairs?.[index]?.inputValue &&
                              typedTouched.pairs?.[index]?.inputValue
                          )}
                          name={`pairs.${index}.inputValue`}
                          onChange={handleChange}
                          value={pair.inputValue}
                        />
                      </div>
                    ))}
                    <div className={s.buttons}>
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
                      <Button onClick={handleSubmit} type={'submit'}>
                        Поиск <Search />
                      </Button>
                    </div>
                  </div>
                )}
              ></FieldArray>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
