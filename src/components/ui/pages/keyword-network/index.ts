export { KeywordNetwork } from './ui/keyword-network'

import {
  asyncActions as KeywordNetworkAsyncActions,
  slice as editionsPubKeyAnalysisSlice,
} from './model/keyword-network-slice.ts'

const keywordNetworkActions = {
  ...KeywordNetworkAsyncActions,
  ...editionsPubKeyAnalysisSlice.actions,
}
const keywordNetworkReducer = editionsPubKeyAnalysisSlice.reducer

export { keywordNetworkActions, keywordNetworkReducer }
