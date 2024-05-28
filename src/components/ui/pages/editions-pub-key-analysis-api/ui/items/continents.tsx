import { useActions } from '@/common/hooks/use-actions'
import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { Search } from '@/icons'
import { FieldArray, Form, Formik } from 'formik'

import s from '@/components/ui/pages/publications-keywords/ui/publications-keywords.module.scss'

export const Continents = () => {
  const { fetchTreeMapData } = useActions(editionsPubKeyAnalysisActions)

  return (
    <div>
      <Formik
        initialValues={{ endYear: '', ids: [''], startYear: '', types: [''] }}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2))
          fetchTreeMapData({
            ids: values.ids,
            types: values.types,
          })
        }}
      >
        {({ handleChange, handleSubmit, setFieldValue, values }) => (
          <Form>
            <div className={s.form_years}>
              <div className={s.countriesRow}>
                <Input
                  name={`ids[0]`}
                  onChange={handleChange}
                  placeholder={`ID направления 1`}
                  value={values.ids[0] || ''}
                />
                <Input
                  name={`types[0]`}
                  onChange={handleChange}
                  placeholder={`Тип публикации 1`}
                  value={values.types[0] || ''}
                />
              </div>
              <FieldArray name={'fields'}>
                {({ push, remove }) => (
                  <>
                    <div className={s.wrapper}>
                      {values.ids.slice(1).map((id, index) => (
                        <div className={s.fieldRow} key={`${id}-${index + 1}`}>
                          <Input
                            name={`ids[${index + 1}]`}
                            onChange={handleChange}
                            placeholder={`ID направления ${index + 2}`}
                            value={id || ''}
                          />
                          <Input
                            name={`countries[${index + 1}]`}
                            onChange={handleChange}
                            placeholder={`Код страны ${index + 2}`}
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
                            setFieldValue('ids', [...values.ids, ''])
                            setFieldValue('countries', [...values.types, ''])
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
        )}
      </Formik>
    </div>
  )
}
