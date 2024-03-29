import { useActions } from '@/common/hooks/use-actions'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { Button } from '@/components/ui/components/button'
import { PieChart } from '@/components/ui/diagrams/pie-chart'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { editionsPubKeyAnalysisSelectors } from '@/components/ui/pages/editions-pub-key-analysis-api/model/editions-pub-key-analysis-selectors'
import { PieData } from '@/data'

export const EditionsPubKeyAnalysisApi = () => {
  const data = useAppSelector(editionsPubKeyAnalysisSelectors)

  console.log(data.publicationsData)
  console.log(PieData)

  const { fetchData } = useActions(editionsPubKeyAnalysisActions)
  const fetchDataHandler = () => {
    fetchData()
  }

  return (
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
      <Button onClick={fetchDataHandler}>Fetch Data</Button>
    </div>
  )
}
