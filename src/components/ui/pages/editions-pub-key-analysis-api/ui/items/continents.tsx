import { useActions } from '@/common/hooks/use-actions'
import { FormWithFieldArray } from '@/components/ui/components/form-with-field-array'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'

export const Continents = () => {
  const allOptions = ['ID направления', 'Тип публикации']
  const { fetchTreeMapData } = useActions(editionsPubKeyAnalysisActions)

  return <FormWithFieldArray allOptions={allOptions} onSubmit={fetchTreeMapData} />
}
