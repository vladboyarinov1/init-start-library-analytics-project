import { useState } from 'react'

import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { PieChart } from '@/components/ui/diagrams/pie-chart'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { editionsPubKeyAnalysisSelectors } from '@/components/ui/pages/editions-pub-key-analysis-api/model/editions-pub-key-analysis-selectors'
import { Formik } from 'formik'

import s from './editions-pub-key-analysis-api.module.scss'

export const EditionsPubKeyAnalysisApi = () => {
  const data = useAppSelector(editionsPubKeyAnalysisSelectors)

  type SelectedValue = 'OA' | 'continents' | 'countries' | 'publications' | 'publishing' | 'types'

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
      <div className={s.dashboard}>
        <div className={s.title}>
          <h2>Издания: анализ публикаций и ключевых слов</h2>
        </div>
        <div className={s.menuSwitchItems}>
          <button
            className={type === 'publications' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('publications')
            }}
          >
            По публикациям
          </button>
          <button
            className={type === 'publishing' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('publishing')
            }}
          >
            По издательствам
          </button>
          <button
            className={type === 'types' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('types')
            }}
          >
            По типам
          </button>
          <button
            className={type === 'OA' ? s.activeBtn : s.button}
            onClick={() => {
              changeSelectedValue('OA')
            }}
          >
            OA
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
        {type === 'publications' && <div>publications</div>}
        {type === 'publishing' && <div>publishing</div>}
        {type === 'types' && <div>types</div>}
        {type === 'OA' && <div>OA</div>}
        {type === 'countries' && <div>countries</div>}
        {type === 'continents' && <div>continents</div>}
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
              <form className={s.form} onSubmit={handleSubmit}>
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
                <Input
                  name={'iso'}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={'ID автора'}
                  type={'text'}
                  value={values.iso}
                />
                {/*{errors.email && touched.email && errors.email}*/}
                <Button disabled={isSubmitting} type={'submit'}>
                  Поиск
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {type === 'publications' && (
        <div>
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
        </div>
      )}
      {type === 'publishing' && <div>publishing</div>}
      {type === 'types' && <div>types</div>}
      {type === 'OA' && <div>OA</div>}
      {type === 'countries' && <div>countries</div>}
      {type === 'continents' && <div>continents</div>}
    </div>
  )
}
