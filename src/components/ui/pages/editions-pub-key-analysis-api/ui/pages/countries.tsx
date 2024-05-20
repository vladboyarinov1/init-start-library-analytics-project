import { useActions } from '@/common/hooks/use-actions'
import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { Search } from '@/icons'
import { Form } from 'antd'
import { FieldArray, Formik } from 'formik'

import s from './types.module.scss'
export const Countries = () => {
  const { fetchBarChartCountryData } = useActions(editionsPubKeyAnalysisActions)
  const allOptions = ['ID направления', 'Тип публикации']

  return (
    <div>
      <Formik
        initialValues={{ pairs: [{ inputValue: '', selectValue: '' }] }}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2))
          fetchBarChartCountryData(values.pairs)
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
