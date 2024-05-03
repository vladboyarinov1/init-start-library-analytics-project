import { useActions } from '@/common/hooks/use-actions.ts'
import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { Search } from '@/icons'
import { Form } from 'antd'
import { FieldArray, Formik } from 'formik'

import s from '@/components/ui/pages/editions-pub-key-analysis-api/ui/pages/types.module.scss'

export const Continents = () => {
  const allOptions = ['ID направления', 'Тип публикации']
  const { fetchBarChartCountryData } = useActions(editionsPubKeyAnalysisActions)

  return (
    <div>
      <Formik
        initialValues={{ pairs: [{ inputValue: '', selectValue: '' }] }}
        onSubmit={values => {
          // fetchData({ iso: values.iso, type: values.type })
          alert(JSON.stringify(values, null, 2))
          fetchBarChartCountryData(values.pairs)
        }}
      >
        {({ handleChange, handleSubmit, setFieldValue, values }) => (
          <Form>
            <FieldArray
              name={'pairs'}
              render={arrayHelpers => (
                <div>
                  {values.pairs.map((pair, index) => (
                    <div className={s.item} key={index}>
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
