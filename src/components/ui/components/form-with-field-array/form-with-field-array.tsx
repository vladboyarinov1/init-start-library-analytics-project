import React from 'react'

import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { Search } from '@/icons'
import { FieldArray, Form, Formik } from 'formik'

import s from './form-with-field-array.module.scss' // Создайте соответствующий файл стилей

type FormWithFieldArrayProps = {
  allOptions: string[]
  onSubmit: (pairs: any) => void
}

export const FormWithFieldArray: React.FC<FormWithFieldArrayProps> = ({ allOptions, onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ pairs: [{ inputValue: '', selectValue: '' }] }}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2))
          onSubmit(values.pairs)
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
                        activeValueName={values.pairs[index].selectValue || ''}
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
        )}
      </Formik>
    </div>
  )
}
