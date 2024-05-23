import { useState } from 'react'

import { SelectedValue } from '@/common/data'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { ChartSection } from '@/components/ui/components/chart-section'
import { DashboardButton } from '@/components/ui/components/dashboard-button'
import { BarChar } from '@/components/ui/diagrams/bar-chart'
import { PieChart } from '@/components/ui/diagrams/pie-chart'
import { TreeMap } from '@/components/ui/diagrams/tree-map'
import { editionsPubKeyAnalysisSelectors } from '@/components/ui/pages/editions-pub-key-analysis-api/model/editions-pub-key-analysis-selectors'
import { Continents } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/items/continents'
import { Countries } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/items/countries'
import { OpenAccess } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/items/open-access'
import { Publications } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/items/publications'
import { Publishing } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/items/publishing'
import { Types } from '@/components/ui/pages/editions-pub-key-analysis-api/ui/items/types'

import s from './editions-pub-key-analysis-api.module.scss'

const buttonConfigs = [
  { title: 'По публикациям', value: 'publications' },
  { title: 'По издательствам', value: 'publishing' },
  { title: 'По типам', value: 'types' },
  { title: 'OA', value: 'OA' },
  { title: 'По странам', value: 'countries' },
  { title: 'По континентам', value: 'continents' },
]

export const EditionsPubKeyAnalysisApi = () => {
  const data = useAppSelector(editionsPubKeyAnalysisSelectors)

  const [type, setType] = useState<SelectedValue>('publications')

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
          {buttonConfigs.map(config => (
            <DashboardButton
              currentType={type}
              key={config.value}
              onChange={changeSelectedValue}
              title={config.title}
              value={config.value as SelectedValue}
            />
          ))}
        </div>
        {type === 'publishing' && <Publishing />}
        {type === 'OA' && <OpenAccess />}
        {type === 'countries' && <Countries />}
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
        <ChartSection data={data.barChartData} title={'Количество изданий по издательствам'}>
          <BarChar data={data.barChartData} />
        </ChartSection>
      )}
      {type === 'types' && data.pieChartData.length > 0 && (
        <ChartSection
          count={data.pieChartData.length}
          data={data.pieChartData}
          title={'Научное направление: количество изданий по типам'}
        >
          <PieChart data={data.pieChartData} />
        </ChartSection>
      )}
      {type === 'OA' && data.openAcceessData.data.length > 0 && (
        <ChartSection
          count={data.openAcceessData.data.length}
          data={data.openAcceessData.exportData}
          title={'Научное направление: издания в отношении ОА'}
        >
          <PieChart data={data.openAcceessData.data} />
        </ChartSection>
      )}
      {type === 'countries' && data.barChartCountryData.data.length > 0 && (
        <ChartSection
          count={data.barChartCountryData.resultCount}
          data={data.barChartCountryData.data}
          title={'Количество изданий по издательствам'}
        >
          <BarChar data={data.barChartCountryData.data} />
        </ChartSection>
      )}

      {type === 'continents' && Object.keys(data.treeMapData).length > 0 && (
        <ChartSection
          data={data.treeMapData}
          title={'Научное направление: количество изданий по континентам'}
        >
          <TreeMap data={data.treeMapData} />
        </ChartSection>
      )}
    </div>
  )
}
