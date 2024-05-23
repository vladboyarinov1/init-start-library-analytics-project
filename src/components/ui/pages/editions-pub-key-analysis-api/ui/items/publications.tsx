import { useActions } from '@/common/hooks/use-actions'
import { FormWithFieldArray } from '@/components/ui/components/form-with-field-array'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'

export const Publications = () => {
  const { fetchData } = useActions(editionsPubKeyAnalysisActions)

  return <FormWithFieldArray allOptions={['Тип издания', 'Код страны']} onSubmit={fetchData} />
}
