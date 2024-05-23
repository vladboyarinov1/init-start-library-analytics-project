import { useActions } from '@/common/hooks/use-actions'
import { FormWithFieldArray } from '@/components/ui/components/form-with-field-array'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'

export const Types = () => {
  const allOptions = ['ID направления', 'Код страны', 'Издатель']
  const { fetchPieChartData } = useActions(editionsPubKeyAnalysisActions)

  return <FormWithFieldArray allOptions={allOptions} onSubmit={fetchPieChartData} />
}
