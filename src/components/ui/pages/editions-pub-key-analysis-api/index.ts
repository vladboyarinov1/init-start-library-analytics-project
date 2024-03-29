import {
  asyncActions as editionsPubKeyAnalysisAsyncActions,
  slice as editionsPubKeyAnalysisSlice,
} from '@/components/ui/pages/editions-pub-key-analysis-api/model/editions-pub-key-analysis-slice'

const editionsPubKeyAnalysisActions = {
  ...editionsPubKeyAnalysisAsyncActions,
  ...editionsPubKeyAnalysisSlice.actions,
}
const editionsPubKeyAnalysisReducer = editionsPubKeyAnalysisSlice.reducer

export { editionsPubKeyAnalysisActions, editionsPubKeyAnalysisReducer }
