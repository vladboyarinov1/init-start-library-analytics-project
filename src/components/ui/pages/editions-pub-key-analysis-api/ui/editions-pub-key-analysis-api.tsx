import { useState } from 'react'

import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { PieChart } from '@/components/ui/diagrams/pie-chart'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { editionsPubKeyAnalysisSelectors } from '@/components/ui/pages/editions-pub-key-analysis-api/model/editions-pub-key-analysis-selectors'
import { Formik } from 'formik'

import s from './editions-pub-key-analysis-api.module.scss'

export const EditionsPubKeyAnalysisApi = () => {
  const data = useAppSelector(editionsPubKeyAnalysisSelectors)

  type SelectedValue = 'QA' | 'continents' | 'countries' | 'publications' | 'publishing' | 'types'

  const [type, setType] = useState<SelectedValue>('publications')

  const { fetchData } = useActions(editionsPubKeyAnalysisActions)
  const fetchDataHandler = (iso: string, type: string) => {
    fetchData({ iso, type })
  }
  const changeSelectedValue = (value: SelectedValue) => {
    setType(value)
  }

  return (
    <div>
      <div>
        <div>
          <button
            className={type === 'publications' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('publications')
            }}
          >
            по публикациям
          </button>
          <button
            className={type === 'publishing' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('publishing')
            }}
          >
            по издательствам
          </button>
          <button
            className={type === 'types' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('types')
            }}
          >
            по типам
          </button>
          <button
            className={type === 'QA' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('QA')
            }}
          >
            QA
          </button>
          <button
            className={type === 'countries' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('countries')
            }}
          >
            По странам
          </button>
          <button
            className={type === 'continents' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('continents')
            }}
          >
            По континентам
          </button>
        </div>
        <div>
          <Formik
            initialValues={{ iso: 'BY', type: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
                fetchDataHandler(values.iso, values.type)
              }, 400)
            }}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              setFieldValue,

              values,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  name={'iso'}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={'ID автора'}
                  type={'text'}
                  value={values.iso}
                />
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
                  setFieldValue={setFieldValue}
                  title={'Тип издания'}
                  variant={'primary'}
                />
                {/*{errors.email && touched.email && errors.email}*/}
                <button disabled={isSubmitting} type={'submit'}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {data.publicationsData.length ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', borderRadius: 12, padding: 10, width: 560 }}>
            <h2>Количество публикаций</h2>
            <PieChart data={data.publicationsData} />
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: 12, padding: 10, width: 560 }}>
            <h2>Количество цитирований</h2>
            <PieChart data={data.citationsData} />
          </div>
        </div>
      ) : (
        ''
      )}
      {/*<Button*/}
      {/*  onClick={() => {*/}
      {/*    fetchDataHandler(inputValue, )*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Fetch Data*/}
      {/*</Button>*/}
    </div>
  )
}
