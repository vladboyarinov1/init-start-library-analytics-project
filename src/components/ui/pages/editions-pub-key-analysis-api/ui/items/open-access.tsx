import { useActions } from '@/common/hooks/use-actions.ts'
import { FormWithFieldArray } from '@/components/ui/components/form-with-field-array'
import { editionsPubKeyAnalysisActions } from '@/components/ui/pages/editions-pub-key-analysis-api'

export const OpenAccess = () => {
  const { fetchOpenAccessData } = useActions(editionsPubKeyAnalysisActions)
  const allOptions = ['ID направления', 'Код страны', 'Тип публикации', 'Издатель']

  return (
    <div>
      <FormWithFieldArray allOptions={allOptions} onSubmit={fetchOpenAccessData} />
    </div>
  )
}
