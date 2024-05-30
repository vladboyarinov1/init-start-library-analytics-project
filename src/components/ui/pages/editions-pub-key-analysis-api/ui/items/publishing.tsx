import { useActions } from '@/common/hooks/use-actions'
import { FormWithFieldArray } from '@/components/ui/components/form-with-field-array'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'

export const Publishing = () => {
  const { fetchBarChartData } = useActions(editionsPubKeyAnalysisActions)
  const allOptions = ['ID направления', 'Код страны', 'Тип публикации']

  return <FormWithFieldArray allOptions={allOptions} onSubmit={fetchBarChartData} />
}
