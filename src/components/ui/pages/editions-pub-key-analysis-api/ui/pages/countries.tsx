import { useActions } from '@/common/hooks/use-actions'
import { FormWithFieldArray } from '@/components/ui/components/form-with-field-array'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'

export const Countries = () => {
  const { fetchBarChartCountryData } = useActions(editionsPubKeyAnalysisActions)
  const allOptions = ['ID направления', 'Тип публикации']

  return <FormWithFieldArray allOptions={allOptions} onSubmit={fetchBarChartCountryData} />
}
