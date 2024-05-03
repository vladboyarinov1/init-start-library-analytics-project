import { useState } from 'react'

import { useAppSelector } from '@/common/hooks/use-app-selector'
import { SelectButton } from '@/components/ui/components/select-button'
import { BarChar } from '@/components/ui/diagrams/bar-chart'
import { PieChart } from '@/components/ui/diagrams/pie-chart'
import { TreeMap } from '@/components/ui/diagrams/tree-map'
import { editionsPubKeyAnalysisSelectors } from '@/components/ui/pages/editions-pub-key-analysis-api/model/editions-pub-key-analysis-selectors'
import { Continents } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/pages/continents.tsx'
import { Publications } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/pages/publications'
import { Publishing } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/pages/publishing'
import { Types } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/pages/types'
import { treeMapData } from '@/data'

import s from './editions-pub-key-analysis-api.module.scss'

export const EditionsPubKeyAnalysisApi = () => {
  const data = useAppSelector(editionsPubKeyAnalysisSelectors)

  type SelectedValue = 'OA' | 'continents' | 'countries' | 'publications' | 'publishing' | 'types'

  const [type, setType] = useState<SelectedValue>('publications')
  const [value, setValue] = useState('test')

  console.log(value)

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

  console.log(data.barChartData)

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
        {type === 'publishing' && <Publishing />}
        {type === 'OA' && <div>OA</div>}
        {type === 'countries' && <Continents />}
        {type === 'continents' && <Continents />}
        {type === 'publications' && <Publications />}
        {type === 'types' && <Types />}
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
      {type === 'publishing' && data.barChartData.length > 0 && (
        <div style={{ backgroundColor: 'white', borderRadius: 12, margin: '0 20px', padding: 10 }}>
          <BarChar data={data.barChartData} />
        </div>
      )}
      {type === 'types' && (
        <div>
          <PieChart data={data.pieChartData} />
        </div>
      )}
      {type === 'OA' && <div>OA</div>}
      {type === 'countries' && (
        <div style={{ backgroundColor: 'white', borderRadius: 12, margin: '0 20px', padding: 10 }}>
          <div>
            <h3>Количество изданий по издательствам</h3>
            <h4>Результат: {data.barChartCountryData.resultCount} страны</h4>
            <SelectButton
              activeValueName={value}
              data={data.barChartCountryData.data}
              itemsData={[
                {
                  items: [{ label: 'World' }, { label: 'Excel' }],
                  label: 'Group 1',
                },
              ]}
              name={value}
              onChange={setValue}
              setFieldValue={setValue}
              title={'opa'}
              variant={'export'}
            />
          </div>
          <BarChar data={data.barChartCountryData.data} />
        </div>
      )}
      {type === 'continents' && Object.keys(data.treeMapData).length && (
        <div>
          <div
            style={{ backgroundColor: 'white', borderRadius: 12, margin: '0 20px', padding: 10 }}
          >
            <TreeMap data={data.treeMapData} />
          </div>
        </div>
      )}
    </div>
  )
}
