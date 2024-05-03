import { useActions } from '@/common/hooks/use-actions.ts'
import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { Search } from '@/icons'
import { Form } from 'antd'
import { Formik } from 'formik'

import s from '@/components/ui/pages/editions-pub-key-analysis-api/ui/editions-pub-key-analysis-api.module.scss'

export const Countries = () => {
  const { fetchData } = useActions(editionsPubKeyAnalysisActions)

  return (
    <div>
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
    </div>
  )
}
