import { useState } from 'react'

import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { Button } from '@/components/ui/components/button'
import { Input } from '@/components/ui/components/input'
import { SelectButton } from '@/components/ui/components/select-button'
import { BarChar } from '@/components/ui/diagrams/bar-chart'
import { PieChart } from '@/components/ui/diagrams/pie-chart'
import { TreeMap } from '@/components/ui/diagrams/tree-map'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { editionsPubKeyAnalysisSelectors } from '@/components/ui/pages/editions-pub-key-analysis-api/model/editions-pub-key-analysis-selectors'
import { BarChartData, treeMapData } from '@/data'
import { Search } from '@/icons'
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
  const renderDashboardButton = (title: string, value: SelectedValue) => {
    return (
      <button
        className={type === `${value}` ? s.activeBtn : s.button}
        onClick={() => {
          changeSelectedValue(value)
        }}
      >
        {title}
      </button>
    )
  }

  return (
    <div>
      <div className={s.dashboard}>
        <div className={s.title}>
          <h2>Издания: анализ публикаций и ключевых слов</h2>
        </div>
        <div className={s.menuSwitchItems}>
          {renderDashboardButton('По публикациям', 'publications')}
          {renderDashboardButton('По издательствам', 'publishing')}
          {renderDashboardButton('По типам', 'types')}
          {renderDashboardButton('OA', 'OA')}
          {renderDashboardButton('По странам', 'countries')}
          {renderDashboardButton('По континентам', 'continents')}
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
            onSubmit={values => {
              setTimeout(() => {
                fetchDataHandler(values.iso, values.type)
              })
            }}
          >
            {({ handleBlur, handleChange, handleSubmit, isSubmitting, setFieldValue, values }) => (
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
                  required
                  type={'text'}
                  value={values.iso}
                />
                {/*{errors.email && touched.email && errors.email}*/}
                <Button disabled={isSubmitting} type={'submit'}>
                  Поиск <Search />
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
      {type === 'publishing' && (
        <div style={{ backgroundColor: 'white', borderRadius: 12, margin: '0 20px', padding: 10 }}>
          <BarChar data={BarChartData} />
        </div>
      )}
      {type === 'types' && <div>types</div>}
      {type === 'OA' && <div>OA</div>}
      {type === 'countries' && <div>countries</div>}
      {type === 'continents' && (
        <div>
          <div
            style={{ backgroundColor: 'white', borderRadius: 12, margin: '0 20px', padding: 10 }}
          >
            <TreeMap data={treeMapData} />
          </div>
        </div>
      )}
    </div>
  )
}
